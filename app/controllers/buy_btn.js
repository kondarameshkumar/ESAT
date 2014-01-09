var move = false;
var args = arguments[0] || {};

var purchaseModel;

var found = false;

var purchases = Alloy.Collections.purchase;
purchases.each(function(purchase) {
	var purchaseJSON = purchase.toJSON();
	Ti.API.info(purchaseJSON.productid + " : " + purchaseJSON.purchased);
	
	if (purchaseJSON.productid == 'ca.csa.cepe.full' &&  purchaseJSON.purchased == 1) {
		found = true;
		purchasedState();
	}
	if (purchaseJSON.productid == args.productid) {
		purchaseModel = purchase;
		if (purchaseJSON.purchased == 1) {
			found = true;
			purchasedState();
		}
	}
});
if (!found) {
	$.price_label.text = args.price;
}

function handleBtnTouchStart(e) {
	$.btn.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ '#317900', '#1e4c00']
   };
}
function handleBtnTouchEnd(e) {
	if (!move) {
		unselectedState();
    	//$.btn.fireEvent('click', {productid: args.productid});
    	Storekit.addEventListener('transactionState', handleTransactionState);
    	tempProductId = args.productid;
    	Ti.API.info("tempProductId: " + tempProductId);
		requestProduct(tempProductId, function (product) {
			Ti.API.info("product: " + product);
			purchaseProduct(product);
		});
	} else {
		move = false;
	}
}
function handleBtnTouchMove(e) {
	unselectedState();
	move = true;
}
function handleBtnTouchCancel(e) {
	unselectedState();
}
function unselectedState() {
	$.btn.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ '#41a100', '#286600']
   };
}

var tempProductId;

var Storekit = require('ti.storekit');

Storekit.receiptVerificationSandbox = true;
Storekit.receiptVerificationSharedSecret = "50ccb644db314699af29fcea6a3694fc";

var verifyingReceipts = false;

function showLoading()
{
	Ti.App.fireEvent("showLoading");
}
function hideLoading()
{
	Ti.App.fireEvent("hideLoading");
}

function markProductAsPurchased(identifier)
{
	Ti.API.info('Marking as purchased: ' + identifier);
	purchasedState();
	purchaseModel.set({purchased:1});
	purchaseModel.save();
}

function purchasedState() {
	$.btn.touchEnabled = false;
	$.btn.backgroundColor = "#d7d7d7";
	$.btn.borderColor = "#bbbbbb";
	$.btn.backgroundGradient = {};
	$.price_label.color = "#858585";
	$.price_label.font = {fontSize: 12, fontFamily: "AvenirLTStd-Black"};
	$.price_label.text = "BOUGHT";
}

function checkIfProductPurchased(identifier)
{
	var check = false;
	purchases.each(function(purchase) {
		var purchaseJSON = purchase.toJSON();
		if (purchaseJSON.productid == identifier &&  purchaseJSON.purchased == 1) {
			check = true;
		}
	});
	return check;
}

function requestProduct(identifier, success)
{
	Ti.API.info("request product identifier: " + identifier);
	showLoading();
	Storekit.requestProducts([identifier], function (evt) {
		hideLoading();
		if (!evt.success) {
			alert('ERROR: We failed to talk to Apple!');
		}
		else if (evt.invalid) {
			alert('ERROR: We requested an invalid product!');
		}
		else {
			for (i=0; i < evt.products.length; i++) {
				Ti.API.info("product #" + i + " : " + evt.products[i]);
			}
			success(evt.products[0]);
		}
	});
}
function handleTransactionState(evt) {
	debugger;
	hideLoading();
	switch (evt.state) {
		case Storekit.FAILED:
			if (evt.cancelled) {
				alert('Purchase cancelled');
				Storekit.removeEventListener('transactionState', handleTransactionState);
			} else {
				alert('ERROR: Buying failed! ' + evt.message);
				Storekit.removeEventListener('transactionState', handleTransactionState);
			}
			break;
		case Storekit.PURCHASED:
			if (verifyingReceipts) {
				Storekit.verifyReceipt(evt, function (e) {
					if (e.success) {
						if (e.valid) {
							alert('Thanks! Receipt Verified');
							markProductAsPurchased(evt.productIdentifier);
							Storekit.removeEventListener('transactionState', handleTransactionState);
						} else {
							alert('Sorry. Receipt is invalid');
							Storekit.removeEventListener('transactionState', handleTransactionState);
						}
					} else {
						alert(e.message);
					}
				});
			} else {
				alert('Thanks!');
				markProductAsPurchased(evt.productIdentifier);
				Storekit.removeEventListener('transactionState', handleTransactionState);
			}
			break;
		case Storekit.PURCHASING:
			Ti.API.info("Purchasing " + evt.productIdentifier);
			break;
		case Storekit.RESTORED:
			// The complete list of restored products is sent with the `restoredCompletedTransactions` event
			Ti.API.info("Restored " + evt.productIdentifier);
			Storekit.removeEventListener('transactionState', handleTransactionState);
		    break;
	}
}

function purchaseProduct(product)
{
	showLoading();
	Storekit.purchase(product);
}
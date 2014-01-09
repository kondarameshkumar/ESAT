var new_view;
var new_window;

function closeModal(e) {
	//Storekit.removeEventListener('restoredCompletedTransactions', handleRestoredCompletedTransactions);
	//Storekit.removeEventListener('transactionState', handleTransactionState);
	$.modal.fireEvent("removeClose", e);
}
function handleTableViewClick(e) {
	Ti.API.debug("handleTableViewClick");
	if (e.index == 0) {
		new_window = Alloy.createController("questions_packs").getView();
	} else if (e.index == 1) {
		new_window = Alloy.createController("study_material").getView();
	}
	new_window.addEventListener("removeClose", removeClose);
	//if (Alloy.isTablet) {
			
	//} else {
		$.navgroup.open(new_window);
	//}
}
function removeClose(e) {
	//if (Alloy.isTablet) {
		//$.home.remove(new_view);
	//} else {
		$.navgroup.close(new_window);
	//}
	new_window.removeEventListener("removeClose", removeClose);
}
/* START PURCHASES
var tempProductId;

function purchaseProductHandle(e) {	
	tempProductId = e.productid;
	requestProduct(tempProductId, function (product) {
		purchaseProduct(product);
	});
}

var Storekit = require('ti.storekit');

Storekit.receiptVerificationSandbox = true;
Storekit.receiptVerificationSharedSecret = "50ccb644db314699af29fcea6a3694fc";

var verifyingReceipts = false;

function showLoading()
{
	
}
function hideLoading()
{
	
}

function markProductAsPurchased(identifier)
{
	Ti.API.info('Marking as purchased: ' + identifier);
	// Store it in an object for immediate retrieval.
	Alloy.Globals.tempPurchasedStore[identifier] = true;
	// And in to Ti.App.Properties for persistent storage.
	Ti.App.Properties.setBool('Purchased-' + identifier, true);
	if (tempProductId == "ca.csa.cepe.full") $.full.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.a") $.a.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.b") $.b.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.c") $.c.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.d") $.d.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.e") $.e.markProductAsPurchased();
	else if (tempProductId == "ca.csa.cepe.f") $.f.markProductAsPurchased();
}

function checkIfProductPurchased(identifier)
{
	Ti.API.info('Checking if purchased: ' + identifier);
	if (Alloy.Globals.tempPurchasedStore[identifier] === undefined)
		Alloy.Globals.tempPurchasedStore[identifier] = Ti.App.Properties.getBool('Purchased-' + identifier, false);
	return Alloy.Globals.tempPurchasedStore[identifier];
}

function requestProduct(identifier, success)
{
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
			success(evt.products[0]);
		}
	});
}

Storekit.addEventListener('transactionState', handleTransactionState);
function handleTransactionState(evt) {
	hideLoading();
	switch (evt.state) {
		case Storekit.FAILED:
			if (evt.cancelled) {
				alert('Purchase cancelled');
			} else {
				alert('ERROR: Buying failed! ' + evt.message);
			}
			break;
		case Storekit.PURCHASED:
			if (verifyingReceipts) {
				Storekit.verifyReceipt(evt, function (e) {
					if (e.success) {
						if (e.valid) {
							alert('Thanks! Receipt Verified');
							markProductAsPurchased(evt.productIdentifier);
						} else {
							alert('Sorry. Receipt is invalid');
						}
					} else {
						alert(e.message);
					}
				});
			} else {
				alert('Thanks!');
				markProductAsPurchased(evt.productIdentifier);
			}
			break;
		case Storekit.PURCHASING:
			Ti.API.info("Purchasing " + evt.productIdentifier);
			break;
		case Storekit.RESTORED:
			// The complete list of restored products is sent with the `restoredCompletedTransactions` event
			Ti.API.info("Restored " + evt.productIdentifier);
		    break;
	}
}

function purchaseProduct(product)
{
	showLoading();
	Storekit.purchase(product);
}

function restorePurchases()
{
	showLoading();
	Storekit.restoreCompletedTransactions();
}
Storekit.addEventListener('restoredCompletedTransactions', handleRestoredCompletedTransactions);

function handleRestoredCompletedTransactions(evt) {
	hideLoading();
	if (evt.error) {
		alert(evt.error);
	}
	else if (evt.transactions == null || evt.transactions.length == 0) {
		alert('There were no purchases to restore!');
	}
	else {
		for (var i = 0; i < evt.transactions.length; i++) {
			if (verifyingReceipts) {
				Storekit.verifyReceipt(evt.transactions[i], function (e) {
					if (e.valid) {
						markProductAsPurchased(e.productIdentifier);
					} else {
						Ti.API.error("Restored transaction is not valid");
					}
				});
			} else {
				markProductAsPurchased(evt.transactions[i].productIdentifier);
			}
		}
		alert('Restored ' + evt.transactions.length + ' purchases!');
	}
}

END PURCHASES */
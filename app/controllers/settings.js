
var user = Alloy.Models.user;
$.first.text = " " + user.toJSON().firstName + " ";
$.last.text = user.toJSON().lastName;

function closeModal() {
$.modal.close();
}
function openRestore(e) {
new_window = Alloy.createController("restorepurchases").getView();
$.navgroup.open(new_window);
}
/*var user = Alloy.Models.user;
$.first.text = " " + user.toJSON().firstName + " ";
$.last.text = user.toJSON().lastName;

var purchases = Alloy.Collections.purchase;

function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
function restorePurchaseHandle(e) {
	Storekit.addEventListener('restoredCompletedTransactions', handleRestoredCompletedTransactions);
	restorePurchases();
}


var Storekit = require('ti.storekit');

Storekit.receiptVerificationSandbox = true;
Storekit.receiptVerificationSharedSecret = "50ccb644db314699af29fcea6a3694fc";

var verifyingReceipts = false;

function showLoading()
{
	Ti.App.fireEvent("showLoading_new");
}
function hideLoading()
{
	Ti.App.fireEvent("hideLoading_new");
}

function getModelById(modelId) {
	var modelById;
	purchases.each(function(purchase) {
		var purchaseJSON = purchase.toJSON();
		if (purchaseJSON.productid == modelId) {
			modelById = purchase;
		}
	});
	return modelById;
}
function markProductAsPurchased(identifier)
{
	Ti.API.info('Marking as purchased: ' + identifier);
	var purchaseModel = getModelById(identifier);
	purchaseModel.set({purchased:1});
	purchaseModel.save();
}

function restorePurchases()
{
	showLoading();
	Storekit.restoreCompletedTransactions();
}

function handleRestoredCompletedTransactions(evt) {
	hideLoading();
	if (evt.error) {
		alert(evt.error);
	}
	else if (evt.transactions == null || evt.transactions.length == 0) {
		alert('There were no purchases to restore!');
	}
	else {
		Ti.API.info("evt.transactions: " + evt.transactions.length);
		Ti.API.info("evt.transactions[i].productIdentifier: " + evt.transactions[0].productIdentifier);
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
				Ti.API.info("evt.transactions[i].productIdentifier: " + evt.transactions[i].productIdentifier);
				markProductAsPurchased(evt.transactions[i].productIdentifier);
			}
		}
		Ti.API.info('Restored ' + evt.transactions.length + ' purchases!');
		alert('Restored ' + evt.transactions.length + ' purchases!');
		Storekit.removeEventListener('restoredCompletedTransactions', handleRestoredCompletedTransactions);
	}
}*/

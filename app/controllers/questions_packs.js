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
var new_window = Alloy.createController("questions_packs_FullSet").getView();
$.navgroup.open(new_window);
//new_window.addEventListener("removeClose", removeClose);
//new_window.open();
}
}
function handleTableViewClick1(e) {
Ti.API.debug("handleTableViewClick1");
if (e.index == 0) {
new_window = Alloy.createController("questions_packs_BlockA").getView();
$.navgroup.open(new_window);
//new_window.open();
}if (e.index == 1) {
new_window = Alloy.createController("questions_packs_BlockB").getView();
$.navgroup.open(new_window);
//new_window.open();
}if (e.index == 2) {
new_window = Alloy.createController("questions_packs_BlockC").getView();
$.navgroup.open(new_window);
//new_window.open();
}if (e.index == 3) {
new_window = Alloy.createController("questions_packs_BlockD").getView();
$.navgroup.open(new_window);
//new_window.open();
}if (e.index == 4) {
new_window = Alloy.createController("questions_packs_BlockE").getView();
$.navgroup.open(new_window);
//new_window.open();
}if (e.index == 5) {
new_window = Alloy.createController("questions_packs_BlockF").getView();
$.navgroup.open(new_window);
//new_window.open();
}
}
/*var settings = Alloy.Models.settings;

//$.tv.data[0].rows[settings.toJSON().timer-3].hasCheck = true;
var indicator;

Ti.App.addEventListener("showLoading", function(e) {
	indicator = Alloy.createController("indicator").getView();
	$.win.add(indicator);
});
Ti.App.addEventListener("hideLoading", function(e) {
	$.win.remove(indicator);
});

function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
function handleTableViewClick(e) {
	for (var i=0; i < $.tv.data[0].rows.length; i++) {
		$.tv.data[0].rows[i].hasCheck = false;
	}
	e.row.hasCheck = true;
	settings.set({
		timer: e.index + 3
	});
	settings.save();
}*/
var new_view;
var new_window;
function closeModal(e) {
//Storekit.removeEventListener('restoredCompletedTransactions', handleRestoredCompletedTransactions);
//Storekit.removeEventListener('transactionState', handleTransactionState);
	$.modal.close();
}
function handleTableViewClick(e) {
	Ti.API.debug("handleTableViewClick");
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
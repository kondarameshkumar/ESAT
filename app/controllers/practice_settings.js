var new_view;
var new_window;
var exams = Alloy.Collections.exams;

var purchases = Alloy.Collections.purchase;
var purchaseText = "Starter Set";

purchases.on("change", function(e) {
    this.each(function(purchase) {
		var purchaseJSON = purchase.toJSON();
		
		if (purchaseJSON.title == "Full Set" &&  purchaseJSON.purchased == 1) {
			purchaseText = "Full Set"
		} else if (purchaseJSON.purchased) {
			purchaseText += ", " + purchaseJSON.description.split(" ")[1];
		}
	});
});
purchases.trigger('change');

var settings = Alloy.Models.settings;
settings.on("change:timer", function(e) {
	var transform = this.toJSON();
    transform.timer = transform.timer + ' hours';
	$.timerText.text = transform.timer;
});
settings.trigger('change:timer');

$.set_text.text = purchaseText;

function fireSetEvent(e) {
	//Ti.App.fireEvent("newPractice");
}

function closeModal(e) {
	//exams.at(exams.length-1).destroy();
	$.modal.fireEvent("removeClose", e);
}
function start(e) {
	$.modal.fireEvent("removeClose", {start:2});
}
function handleTableViewClick(e) {
	if (e.index == 1) {
		new_window = Alloy.createController("practice_timer").getView();
		new_window.addEventListener("removeClose", removeClose);
		if (Alloy.isTablet) {
			
		} else {
			$.navgroup.open(new_window);
		}
	}
}
function removeClose(e) {
	if (Alloy.isTablet) {
		//$.home.remove(new_view);
	} else {
		$.navgroup.close(new_window);
	}
	new_window.removeEventListener("removeClose", removeClose);
}
var settings = Alloy.Models.settings;
var exams = Alloy.Collections.exams;
$.basicSwitch.value = settings.toJSON().instant_feedback;

var new_view;
var new_window;

function fireSetEvent(e) {
	//Ti.App.fireEvent("newStudy");
}
function closeModal(e) {
	//exams.at(exams.length-1).destroy();
	$.modal.fireEvent("removeClose", e);
}
function start(e) {
	$.modal.fireEvent("removeClose", {start:1});
}
function outputState(){
    Ti.API.info('Switch value: ' + $.basicSwitch.value);
    settings.set({
		instant_feedback: $.basicSwitch.value
	});
	settings.save();
}
function handleTableViewClick(e) {
Ti.API.info('In StartHandelTableViewClick');
if (e.index == 1) {
Ti.API.info('In StartHandelTableViewClick');

new_window = Alloy.createController("set_select").getView();
Ti.API.info('In StartHandelTableViewClick 2');
new_window.addEventListener("removeClose", removeClose);
Ti.API.info('In StartHandelTableViewClick 3');
//if (Alloy.isTablet) {

//} else {
$.navgroup.open(new_window);
Ti.API.info('In StartHandelTableViewClick 4');
//}
}
}
function removeClose(e) {
//if (Alloy.isTablet) {
//$.home.remove(new_view);
//} else {
Ti.API.info('In remove close');
$.navgroup.close(new_window);
Ti.API.info('In remove close..2');

//}
new_window.removeEventListener("removeClose", removeClose);
Ti.API.info('In remove close..3..');
}

var settings = Alloy.Models.settings;
settings.on("change:question_set", function(e) {
	var transform = this.toJSON();
    if (transform.question_set == 0) {
    	$.setText.text = "Starter Set";
    } else if (transform.question_set == 1) {
    	$.setText.text = "Full Set";
    } else if (transform.question_set == 2) {
    	$.setText.text = "Block A";
    } else if (transform.question_set == 3) {
    	$.setText.text = "Block B";
    } else if (transform.question_set == 4) {
    	$.setText.text = "Block C";
    } else if (transform.question_set == 5) {
    	$.setText.text = "Block D";
    } else if (transform.question_set == 6) {
    	$.setText.text = "Block E";
    } else if (transform.question_set == 7) {
    	$.setText.text = "Block F";
    }
});
settings.trigger('change:question_set');
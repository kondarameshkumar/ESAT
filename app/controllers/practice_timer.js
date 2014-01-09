var settings = Alloy.Models.settings;

$.tv.data[0].rows[settings.toJSON().timer-3].hasCheck = true;

function closeModal(e) {
	$.win.fireEvent("removeClose", e);
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
	
	var exams = Alloy.Collections.exams;
	var exam = exams.at(exams.length-1);
	var timeLeft = (e.index + 3) * 60 * 60;
    exam.set({
    	time: timeLeft
    });
    exam.save();
}
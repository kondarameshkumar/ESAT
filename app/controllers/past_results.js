function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
var exams = Alloy.Collections.exams;
var exam = exams.at(exams.length-1);
var examJSON = exam.toJSON();


if (examJSON.completed == 1) {
	setScore(examJSON);
} else if (exams.length > 1) {
	var pastExam = exams.at(exams.length-2);
	var pastExamJson = pastExam.toJSON();
	setScore(pastExamJson);
}
function setScore(json) {
	$.type.text = json.type;
	$.date.text = json.date;
	var percentage = (json.score / json.length)*100;
	if (percentage < 51) {
		$.bg.backgroundColor = "#be0d0d";
		$.feedbackStatement.text = "Needs improvement!";
	} else if (percentage < 81) {
		$.bg.backgroundColor = "#e97314";
		$.feedbackStatement.text = "Keep practicing";
	} else {
		$.bg.backgroundColor = "#149c0a";
		$.feedbackStatement.text = "Well done!";
	}
	$.generalFeedback.text = "Visit our store for additonal questions and resources."
	$.score.text = json.score + "/" + json.length;
}

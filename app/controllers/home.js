var new_controller;
var new_view;
var new_window;
var indicator;

var purchases = Alloy.Collections.purchase;
var purchaseText = "";
var settings = Alloy.Models.settings;
var exams = Alloy.Collections.exams;
var exam;
var lastExam;
var length = 0;
var ready = 0;

//win.orientationModes = [Ti.UI.PORTRAIT];


Alloy.Globals.purchases = [1,0,0,0,0,0,0,0];

purchases.on("change", function(e) {
	var purchaseCount = 0;
    this.each(function(purchase) {
		var purchaseJSON = purchase.toJSON();
		if (purchaseJSON.title == "Full Set" &&  purchaseJSON.purchased == 1) {
			Alloy.Globals.purchases[1] = 1;
			purchaseCount = 6;
		} else {
			purchaseCount += purchaseJSON.purchased;
			if (purchaseJSON.purchased == 1) {
				if (purchaseJSON.description == "Block A") Alloy.Globals.purchases[2] = 1;
				if (purchaseJSON.description == "Block B") Alloy.Globals.purchases[3] = 1;
				if (purchaseJSON.description == "Block C") Alloy.Globals.purchases[4] = 1;
				if (purchaseJSON.description == "Block D") Alloy.Globals.purchases[5] = 1;
				if (purchaseJSON.description == "Block E") Alloy.Globals.purchases[6] = 1;
				if (purchaseJSON.description == "Block F") Alloy.Globals.purchases[7] = 1;
			}
		}
	});
	if (purchaseCount > 6) purchaseCount = 6;
	$.more_questions_btn.setDescription("You own " + purchaseCount + "/6 subject blocks");
	if (purchaseCount < 1) {
		$.practice_btn.disableTouch();
	} else {
		$.practice_btn.enableTouch();
	}
});
purchases.trigger('change');

exams.on("destroy", function(e) {
	if (this.length != length) {
		addExamListeners();
		length = this.length;
	}
});
exams.on("change", function(e) {
	Ti.API.info("exams.length: " + this.length);
	if (this.length != length) {
		addExamListeners();
		length = this.length;
		if (ready == 1) {
			new_view = Alloy.createController("exam").getView();
			new_view.addEventListener("open", switchState);
			new_view.addEventListener("exit", exitExam);
			$.nav.open(new_view);
			$.home.remove(indicator);
			ready = 0;
		}
	}
});
exams.trigger('change');

function addExamListeners() {
	exams = Alloy.Collections.exams;
	if (exams.length > 0) {
		exam = exams.at(exams.length-1);
		exam.on("change:time", function(e) {
			updateStatus(this);
		});
		exam.on("change:progress", function(e) {
			updateStatus(this);
		});
		
		exam.on("change:started", function(e) {
			
			var examJSON = this.toJSON();
			Ti.API.info("change:started: " + examJSON.started);
			if (examJSON.started == 1 && examJSON.completed != 1) {
				$.start.visible = false;
				$.in_progress.visible = true;
			}
		});
		
		exam.trigger('change:time');
		exam.trigger('change:started');
	}
}
function updateStatus(model) {
	var examJSON = model.toJSON();
	var percent = Math.floor((examJSON.progress / examJSON.length) * 100);
	var percentScore;
	var passText = " (Failed)";
	if (examJSON.completed == 1) {
		percentScore = Math.floor((examJSON.score / examJSON.length)*100);
		if (percentScore > 79) passText = " (Passed)";
		Ti.API.info("examJSON.completed == 1");
		$.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
	} else if (exams.length > 1) {
		var pastExam = exams.at(exams.length-2);
		var pastExamJson = pastExam.toJSON();
		percentScore = Math.floor((pastExamJson.score / pastExamJson.length)*100);
		if (percentScore > 79) passText = " (Passed)";
		Ti.API.info("exams.length > 1");
		$.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
	}
	if (percent == 100 && examJSON.completed == 0) {
		$.start.visible = true;
		$.in_progress.visible = false;
		model.set({
			completed: 1
		});
		model.save();
		percentScore = Math.floor((examJSON.score / examJSON.length)*100);
		if (percentScore > 79) passText = " (Passed)";
		Ti.API.info("percent == 100 && examJSON.completed == 0");
		$.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
		if (examJSON.type == "Practice Exam") {
			doExit();
		}
		
	} else {
		var timeLeft = examJSON.time;
		if (timeLeft == 0 && examJSON.type == "Practice Exam") {
			$.start.visible = true;
			$.in_progress.visible = false;
			model.set({
				completed: 1
			});
			model.save();
			percentScore = Math.floor((examJSON.score / examJSON.length)*100);
			if (percentScore > 79) passText = " (Passed)";
			Ti.API.info("timeLeft == 0 && examJSON.type == 'Practice Exam'");
			$.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
			doExit();
		} else if (timeLeft == 0) {
			$.continue_btn.setDescription(percent + "% complete\nNo time limit");
		} else {
			$.continue_btn.setDescription(percent + "% complete\n" + getTime(timeLeft));
		}
	}
}
function addOpen(controller) {
	new_controller = Alloy.createController(controller);
	new_view = new_controller.getView();
	new_view.addEventListener("removeClose", removeClose);
	//if (Alloy.isTablet) {
		//$.home.add(new_view);
//	} else {
		new_window = Ti.UI.createWindow({navBarHidden:true,backgroundColor:"white"});
		new_window.add(new_view);
		new_window.open({modal:true});
	//}
}
function openAbout(e) {
	addOpen("about");
}
function openSettings(e) {
	addOpen("settings");
}
function continueExam(e) {
	Ti.API.debug("continueExam");
	indicator = Alloy.createController("indicator").getView();
	$.home.add(indicator);
	new_view = Alloy.createController("exam").getView();
	new_view.addEventListener("exit", exitExam);
	$.nav.open(new_view);
	$.home.remove(indicator);
}
function discardExam(e) {
	$.dialog.show();
}
function handleDiscardClick(e) {
	Ti.API.log(e.index);
	if (e.index == 0) {
		indicator = Alloy.createController("indicator").getView();
		exams.at(exams.length-1).destroy();
		Alloy.Collections.questions.deleteAll(exams.length);
		Alloy.Collections.questions.fetch();
		discard();
	}
}
function discard() {
	$.home.add(indicator);
	Ti.API.info("exams.length-1: " + exams.length);

	$.home.remove(indicator);
	$.start.visible = true;
	$.in_progress.visible = false;
}
function openStudySettings(e) {
	addOpen("study_settings");
}
function openPracticeSettings(e) {
	addOpen("practice_settings");
}
function openSettings(e) {
new_window = Alloy.createController("settings").getView();
$.nav.open(new_window);
//addOpen("settings");
}
function openPastResults(e)	{
	if ((exams.length == 1 && exams.at(exams.length-1).toJSON().completed == 1) || exams.length > 1) {
		addOpen("past_results");
	} else {
		alert("No exams taken yet");
	}
}	
function openStore(e) {
	addOpen("store");
}
var type = 1;				
function removeClose(e) {
	Ti.API.debug("start: " + e.start);
	//if (Alloy.isTablet) {
	//	$.home.remove(new_view);
	//} else {
		if (e.start > 0) {
			type = e.start;
			new_window.addEventListener("close", startExam);
		}
		new_window.close();
	//}
	new_view.removeEventListener("removeClose", removeClose);
}
function startExam(e) {
	new_window.removeEventListener("close", startExam);
	indicator = Alloy.createController("indicator").getView();
	$.home.add(indicator);
	if (type == 1) {
		Ti.App.fireEvent("newStudy");
	} else {
		Ti.App.fireEvent("newPractice");
	}
	ready = 1;
	/*
	new_view = Alloy.createController("exam").getView();
	new_view.addEventListener("open", switchState);
	new_view.addEventListener("exit", exitExam);
	$.nav.open(new_view);
	$.home.remove(indicator);
	*/
	Ti.API.debug("open: " + new_window);
}

Ti.App.addEventListener("showLoading_new", function(e) {
	indicator = Alloy.createController("indicator").getView();
	new_window.add(indicator);
});
Ti.App.addEventListener("hideLoading_new", function(e) {
	new_window.remove(indicator);
});
function switchState() {
	Ti.API.info("switchState");
	exams = Alloy.Collections.exams;
	exam = exams.at(exams.length-1);
	Ti.API.info("exam.toJSON().started: " + exam.toJSON().started);
	exam.set({
		started: 1
	});
	exam.save();
}
function exitExam(e) {
	doExit();
}
function doExit() {
	new_view.removeEventListener("open", switchState);
	new_view.removeEventListener("exit", exitExam);
	$.nav.close(new_view);
	exam = exams.at(exams.length-1);
	if (exam.toJSON().completed == 1) {
		discard();
	}
}
function getTime(time) {
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;
	var minutes = Math.floor(time / 60);
	if (minutes < 10) minutes = "0" + minutes;
	var seconds = time - minutes * 60;
	if (seconds < 10) seconds = "0" + seconds;
	//01:23:40s left
	return "0" + hours + ":" + minutes + ":" + seconds + "s left";
}
function checkIfProductPurchased(identifier)
{
	if (Alloy.Globals.tempPurchasedStore[identifier] === undefined) {
		Alloy.Globals.tempPurchasedStore[identifier] = Ti.App.Properties.getBool('Purchased-' + identifier, false);
	}
	return Alloy.Globals.tempPurchasedStore[identifier];
}

/*
Alloy.Collections.questions = Alloy.createCollection('question');

var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var question_txts = ["question_txts1","question_txts2","question_txts3","question_txts4","question_txts5","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1","question_txts1"];
var optionss = ["option11,option12,option13,option14","option21,option22,option23,option24","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14","option11,option12,option13,option14"];
var answers = ["option11","option22","option13","otion14","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11","option11"];
var references = ["reference1","reference2","reference3","reference4","reference5","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1","reference1"];


for (var i=0; i < 3; i++) {
	var question = Alloy.createModel('question', {
		id: ids[i],
		question_txt: question_txts[i],
		options: optionss[i],
		answer: answers[i],
		reference: references[i]
	});
	Alloy.Collections.questions.add(question);
	question.save();
}
*/

//You own 2/6 subject blocks
//more_questions_btn
/*
if (checkIfProductPurchased('ca.csa.cepe.full')) {
	$.more_questions_btn.setDescription("You own 6/6 subject blocks");
} else {
	var num_purchased = 0;
	if (checkIfProductPurchased('ca.csa.cepe.a')) num_purchased++;
	if (checkIfProductPurchased('ca.csa.cepe.b')) num_purchased++;
	if (checkIfProductPurchased('ca.csa.cepe.c')) num_purchased++;
	if (checkIfProductPurchased('ca.csa.cepe.d')) num_purchased++;
	if (checkIfProductPurchased('ca.csa.cepe.e')) num_purchased++;
	if (checkIfProductPurchased('ca.csa.cepe.f')) num_purchased++;
	$.more_questions_btn.setDescription("You own " + num_purchased + "/6 subject blocks");
}
*/
$.home.open();
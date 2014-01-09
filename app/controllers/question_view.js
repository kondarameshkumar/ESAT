var new_window;
var new_view;

var exams = Alloy.Collections.exams;
var settings = Alloy.Models.settings;

var exam = exams.at(exams.length-1);
var examJson = exam.toJSON();

var lastClicked = 0;

var instant = 0;
var modelJson = $model.toJSON();
var answer = modelJson.answer;
var selected = modelJson.selected;
var submitted = modelJson.submitted;
var inReview = modelJson.inReview;

if (examJson.type != "Practice Exam") {
	$.audio_btn_img.opacity = 1;
	$.audio_btn_lbl.opacity = 1;
	$.audio_btn.touchEnabled = true;
}
if (modelJson.figure) {
	$.diagram_btn_img.opacity = 1;
	$.diagram_btn_lbl.opacity = 1;
	$.diagram_btn.touchEnabled = true;
}
Ti.API.info("figure: " + modelJson.figure);
Ti.API.info("reference: " + modelJson.reference);
if (inReview == 1) {
	setInReview();
} else if (submitted == 1) {
	setSelected(selected);
	setSubmitted();
} else if (selected != 0) {
	setSelected(selected);
}
function setSubmitted() {
	$.skipSumit.visible = false;
	$.prevNext.visible = true;
	$.a.touchEnabled = false;
	$.b.touchEnabled = false;
	$.c.touchEnabled = false;
	$.d.touchEnabled = false;
}
function setInReview() {
	$.a.touchEnabled = false;
	$.b.touchEnabled = false;
	$.c.touchEnabled = false;
	$.d.touchEnabled = false;
	if (answer == 1) {
		$.a.backgroundColor = "#2d4216";
		$.aspace.backgroundColor = "#2d4216";
	} else if (answer == 2) {
		$.b.backgroundColor = "#2d4216";
		$.bspace.backgroundColor = "#2d4216";
	} else if (answer == 3) {
		$.c.backgroundColor = "#2d4216";
		$.cspace.backgroundColor = "#2d4216";
	} else if (answer == 4) {
		$.d.backgroundColor = "#2d4216";
		$.dspace.backgroundColor = "#2d4216";
	}
	if (answer != selected) {
		if (selected == 1) {
			$.a.backgroundColor = "#4b1717";
			$.aspace.backgroundColor = "#4b1717";
		} else if (selected == 2) {
			$.b.backgroundColor = "#4b1717";
			$.bspace.backgroundColor = "#4b1717";
		} else if (selected == 3) {
			$.c.backgroundColor = "#4b1717";
			$.cspace.backgroundColor = "#4b1717";
		} else if (selected == 4) {
			$.d.backgroundColor = "#4b1717";
			$.dspace.backgroundColor = "#4b1717";
		}
	}
	$.img_0.image = null;
	$.img_1.image = null;
	$.img_2.image = null;
	$.img_3.image = null;
	$.skipSumit.visible = false;
	$.prevNext.visible = true;
	
	if (modelJson.reference) {
		$.feedback_btn_img.opacity = 1;
		$.feedback_btn_lbl.opacity = 1;
		$.feedback_btn.touchEnabled = true;
	}
}
function enableSubmit() {
	$.submit.touchEnabled = true;
	$.submit.opacity = 1;
}
function setSelected(num) {
	enableSubmit();
	reset();
	if (num == 1) {
		$.img_0.image = "/images/checkbox-selected.png";
		lastClicked = $.img_0;
	} else if (num == 2) {
		$.img_1.image = "/images/checkbox-selected.png";
		lastClicked = $.img_1;
	} else if (num == 3) {
		$.img_2.image = "/images/checkbox-selected.png";
		lastClicked = $.img_2;
	} else if (num == 4) {
		$.img_3.image = "/images/checkbox-selected.png";
		lastClicked = $.img_3;
	}
	selected = num;
	$model.set({
		selected: num
	}, {silent:true});
	$model.save(null, { silent: true });
}
function clickA(e) {
	setSelected(1);
}

function clickB(e) {
	setSelected(2);
}

function clickC(e) {
	setSelected(3);
}

function clickD(e) {
	setSelected(4);
}
function reset() {
	if (lastClicked != 0) {
		lastClicked.image = "/images/checkbox.png";
	}
}

function handleSkip(e) {
	if ($model.toJSON().number != examJson.length) {
		
		exam.set({
			location: $model.toJSON().number
		});
		exam.save();
	} else {
		alert("You are on the last question.");
	}
}
function handlePrev(e) {
	if ($model.toJSON().number != 1) {
		exam.set({
			location: $model.toJSON().number - 2
		});
		exam.save();
	} else {
		alert("You are on the first question.");
	}
}
function handleNext(e) {
	if ($model.toJSON().number != examJson.length) {
		exam.set({
			location: $model.toJSON().number
		});
		exam.save();
	} else {
		alert("You are on the last question.");
	}
}

function handleSubmit(e) {
	submitted = 1;
	exam = exams.at(exams.length-1);
	examJson = exam.toJSON();
	var score = examJson.score;
	if (answer == selected) {
		score++;
	}
	var progress = examJson.progress;
	progress++;
	exam.set({
		progress: progress,
		score: score
	});
	exam.save();
	
	if (settings.toJSON().instant_feedback == 1 && examJson.type != "Practice Exam") {
		instant = 1;
		setInReview();
	} else {
		setSubmitted();
		if ($model.toJSON().number != examJson.length) {
			exam.set({
				location: $model.toJSON().number
			});
			exam.save();
		}
	}
	$model.set({
		submitted: submitted,
		inReview: instant
	}, {silent:true});
	$model.save(null,{silent:true});
}

var audioPlayer;
//Ti.API.debug($model.toJSON().id);
//var audioPlayer = Ti.Media.createSound({url:'http://elearning.csa.ca/applications/electrical/exam/mp3/' + $model.toJSON().id + '.mp3'});
//audioPlayer.addEventListener(Ti.Media.createIOErrorEvent(), handleIOError);
/*
if (Ti.App.Properties.getString('mode') == "study") {
    audioBtn.enabled = true;
    audioBtn.setBackgroundImage('assets/png/playAudio.png');
}
*/
//var audioPlayer = Ti.Media.createSound({url:"assets/mp3/" + questionData.id + ".mp3"});
//var audioChannel;
var playing = false;

function handleAudioBtnClick(e) {
    if (!playing) {
        if (Titanium.Network.online) {
            audioPlayer = Ti.Media.createAudioPlayer({url:'http://elearning.csa.ca/applications/electrical/exam/mp3/' + $model.toJSON().id + '.mp3'});			
			audioPlayer.addEventListener('change', handleChange);
            audioPlayer.play();
            $.audio_btn_img.image = "/images/icon-stop.png";
            //audioBtn.backgroundImage = 'assets/png/stopAudio.png';
            playing = true;
            $.audio_btn_lbl.text = "Stop Audio";
            //audioChannel.addEventListener('soundComplete', handleSoundComplete);
            //audioBtn.height = 60;
            //audioBtn.width = 185;
        } else {
            alert("You must be connected to the internet to listen to audio clips");
        }
    } else {
        if (playing) audioPlayer.stop();
        $.audio_btn_img.image = "/images/icon-play-tablet.png";
        playing = false;
        $.audio_btn_lbl.text = "Play Audio";
    }
}
function handleDiagramBtnClick(e) {
	Ti.API.info("handleDiagramBtnClick");
	if (Titanium.Network.online) {
		new_view = Alloy.createController('diagram', {
			image: "http://elearning.csa.ca/applications/electrical/exam/figures/" + modelJson.figure
		}).getView();
		new_view.addEventListener("removeClose", removeClose);
		new_window = Ti.UI.createWindow({navBarHidden:true,backgroundColor:"white"});
		new_window.add(new_view);
		new_window.open({modal:true});
	} else {
		alert("You must be connected to the internet to view diagrams");
	}
}
function handleFeedbackBtnClick(e) {
	Ti.API.info("handleFeedbackBtnClick");
	new_view = Alloy.createController('feedback', {
		text: modelJson.reference
	}).getView();
	new_view.addEventListener("removeClose", removeClose);
	new_window = Ti.UI.createWindow({navBarHidden:true,backgroundColor:"white"});
	new_window.add(new_view);
	new_window.open({modal:true});
}
function removeClose(e) {
	new_window.close();
	new_view.removeEventListener("removeClose", removeClose);
}
function handleIOError(e) {
    Ti.API.log("ERROR ON URL REQUEST FOR AUDIO FILE!");
    internetConnection = false;
}
function handleChange(e) {
    //Ti.API.log('handleSoundComplete');
    //audioBtn.backgroundImage = 'assets/png/playAudio.png';
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
    if (e.state == 7) {
    	Ti.API.info('handleSoundComplete');
    	 $.audio_btn_img.image = "/images/icon-play-tablet.png";
	    playing = false;
	    $.audio_btn_lbl.text = "Play Audio";
    }
   // playing = false;
}
function handleBtnClick(e) {
    if (playing) audioPlayer.stop();
    $.audio_btn_img.image = "/images/icon-play-tablet.png";
    playing = false;
    $.audio_btn_lbl.text = "Play Audio";
}
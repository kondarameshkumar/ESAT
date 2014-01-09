Titanium.include('json.i18n.js');
Titanium.include('backbone.associate.js');
var moment = require('alloy/moment');

if(Titanium.Network.online) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("POST", "https://api.parse.com/1/events/AppOpened", true);
	xhr.setRequestHeader("X-Parse-Application-Id", "y4SewxnP9hqjnoT0NsAOuWzwRwm6tldK4yHWIGSw");
	xhr.setRequestHeader("X-Parse-REST-API-Key", "RYMAraQVoCyGgCNC3ziwUs3Udg7vvMUKUmIQOUsf");
	xhr.setRequestHeader("Content-Type", "application/json");
	var d = JSON.stringify({});
	xhr.send(d);
}

Alloy.Models.settings = Alloy.createModel('settings');
Alloy.Models.settings.fetch();

Alloy.Models.user = Alloy.createModel('user');
Alloy.Models.user.fetch();

Alloy.Collections.exams = Alloy.createCollection('exam');
Alloy.Collections.exams.fetch();

//Alloy.Collections.results = Alloy.createCollection('result');
//Alloy.Collections.results.fetch();

Ti.API.debug('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
Alloy.Collections.purchase = Alloy.createCollection('purchase');

if (!Ti.App.Properties.hasProperty('seeded')) {

	var titles = ["Full Set", "Occupational Skills", "Systems, Distribution and Services", "Wiring Methods", "Motors and Control Systems", "Signalling and Communication Systems", "Upgrading, Service and Maintenance"];
	var descriptions = ["All the blocks at a discount", "Block A", "Block B", "Block C", "Block D", "Block E", "Block F"];
	var prices = ["$89.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99", "$16.99"];
	var productids = ["ca.csa.cepe.full", "ca.csa.cepe.a", "ca.csa.cepe.b", "ca.csa.cepe.c", "ca.csa.cepe.d", "ca.csa.cepe.e", "ca.csa.cepe.f"];
	var appleids = ["555025982", "555028297", "555028307", "555028920", "555028926", "555030034", "555025982"];
	

	// Loop through the names array to create a model representing each and save it to the colleciton
	for(var i=0,j=titles.length;i<j;i++) {
		var purchase = Alloy.createModel('purchase', {
			title: titles[i],
			description: descriptions[i],
			price: prices[i],
			productid: productids[i],
			appleid: appleids[i],
			purchased: 0
		});
		Alloy.Collections.purchase.add(purchase);
		purchase.save();
	}
	// set our app property so this code doesn't run next time
    Ti.App.Properties.setString('seeded', 'yuppers');
}


// force tables to update
Alloy.Collections.purchase.fetch();

Alloy.Collections.questions = Alloy.createCollection('question');
Alloy.Collections.questions.fetch();

var percentages = [14,24,25,16,10,11];

var set;
var num_questions = 30;
var time = 0;
var type = "Study Exam";


var freeBlockA = [2,3,4,6,8,10,17,25,29,36,39,51,59,67,68,73,77,78,83,88,130,135,292];
var freeBlockB = [341,358,359,360,361,372,392,393,404,408,409,413,424,435,436,444,451,459,466,472,477,483,499,501,502,503,505,506,508,511,513,535,537,540,547,548,551,555,567,568,576,597,599,627,635,636,646,651,660,670,697];
var freeBlockC = [698,701,702,1082,705,714,721,725,728,734,735,736,737,739,752,756,789,793,802,837,844,845,856,880,897,908,912,915,923,932,936,940,941,956,962,973,974,982,989,990,991,1024,1002,1046,1043,1083,1051];
var freeBlockD = [1084,1086,1087,1088,1090,1091,1092,1093,1094,1095,1110,1111,1118,1119,1159,1124,1125,1126,1127,1128,1130,1131,1132,1133,1134,1137,1138,1140,1141,1153,1154,1161,1163,1164,1165,1167,1168];
var freeBlockE = [1253,1256,1257,1258,1259,1260,1261,1267,1268,1269,1270,1289,1290,1299,1300,1301,1302,1303];
var freeBlockF = [1340,1341,1344,1343,1347,1348,1349,1350,1352,1353,1355,1519,1520,1521,1494];
var freeBlocks = [freeBlockA,freeBlockB,freeBlockC,freeBlockD,freeBlockE,freeBlockF];

Ti.App.addEventListener("newStudy", function(e) {
    Ti.API.debug("newStudy");
    type = "Study Exam";
    num_questions = 30;
    time = 0;
    var settings = Alloy.Models.settings;
    var settingsJson = settings.toJSON();
    if (settingsJson.question_set == 2) {
    	createNewSet('a');
    } else if (settingsJson.question_set == 3) {
    	createNewSet('b');
    } else if (settingsJson.question_set == 4) {
    	createNewSet('c');
    } else if (settingsJson.question_set == 5) {
    	createNewSet('d');
    } else if (settingsJson.question_set == 6) {
    	createNewSet('e');
    } else if (settingsJson.question_set == 7) {
    	createNewSet('f');
    } else {
    	createNewSet('z');
    }
});
Ti.App.addEventListener("newPractice", function(e) {
	Ti.API.debug("newPractice");
	type = "Practice Exam";
	num_questions = 100;
    time = Alloy.Models.settings.toJSON().timer * 60 * 60;
    
    createNewSet('z');
});
Ti.App.addEventListener("newFull", function(e) {
    createFullSet();
});
function createFullSet() {
    set = {
        questions:[]
    };
    for (var i = 0; i < percentages.length; i++) {
        var num_questions_section = i18n.getLength('root.sections.section[' + i + '].questions.question');
        for (var j = 0; j < num_questions_section; j++) {
            set.questions.push({"s":i,"n":j});
        }
    }
    
    //window.fireEvent('update',set);
    Ti.API.debug("NEW SET: " + JSON.stringify(set));
    //Ti.App.Properties.setString('set', JSON.stringify(set));
}

function createNewSet(blockLetter) {
    var lengths = new Object();    
    if (blockLetter == 'z') {
        percentages = [14,24,25,16,10,11];
    } else if (blockLetter == 'a') {
        percentages = [100,0,0,0,0,0];
    } else if (blockLetter == 'b') {
        percentages = [0,100,0,0,0,0];
    } else if (blockLetter == 'c') {
        percentages = [0,0,100,0,0,0];
    } else if (blockLetter == 'd') {
        percentages = [0,0,0,100,0,0];
    } else if (blockLetter == 'e') {
        percentages = [0,0,0,0,100,0];
    } else if (blockLetter == 'f') {
        percentages = [0,0,0,0,0,100];
    }
    set = {
        questions:[]
    };
    var arrs = new Array();
    var weight = 0;
    var weights = new Array();
    
    for (var i = 0; i < percentages.length; i++) {
        var chr = String.fromCharCode(97 + i);
        lengths[chr + "_length"] = 0;
        var num_questions_section;
        Ti.API.info("i: "+ i);
        Ti.API.info("i+2" + i + 2);
        Ti.API.info("Alloy.Globals.purchases[i+2]: " + Alloy.Globals.purchases[Number(i+2)]);
        if (Alloy.Globals.purchases[1] == 1 || Alloy.Globals.purchases[Number(i+2)] == 1) {
        	num_questions_section = i18n.getLength('root.sections.section[' + i + '].questions.question');
        } else {
        	Ti.API.info("Block " + chr + " not purchased, using free set");
        	//num_questions_section = freeBlocks[i].length;
        	num_questions_section = i18n.getLength('root.sections.section[' + i + '].questions.question');
        }
        var section_weight = num_questions * (percentages[i] / 100);
        var decimal = "." + section_weight.toString().split('.')[1];
        weights.push({"section":i,"weight":decimal});
        weight = weight + Math.floor(section_weight);
        var arr = range(num_questions_section);
        while (set.questions.length < weight ) {
            var x = Math.floor(Math.random()*(arr.length));
            var unique = arr.splice(x,1);
            lengths[chr + "_length"]++;
            set.questions.push({"s":i,"n":unique[0]});
        }
        arrs.push(arr);
    }
    var questions_left = num_questions - set.questions.length;
    if (questions_left > 0) {
        weights.sort(function(a,b) { return parseFloat(b.weight) - parseFloat(a.weight); } );
        for (var j = 0; j < questions_left; j++) {
            var arr = arrs[weights[j].section];
            var x = Math.floor(Math.random()*(arr.length));
            var unique = arr.splice(x,1);
            var chr = String.fromCharCode(97 + weights[j].section);
            lengths[chr + "_length"]++;
            set.questions.push({"s":weights[j].section,"n":unique[0]});
        }
    }
    set.questions.sort(function() {return 0.5 - Math.random();});
    
    var questions = Alloy.Collections.questions;
	
	var exam = Alloy.createModel("exam", {
    	type: type,
    	date: moment().format('YYYY-MM-DD'),
    	length: num_questions,
    	location: 0,
    	time: time,
    	started: 0,
    	progress: 0,
    	completed: 0,
    	score: 0,
    	block_a_score: 0,
    	block_a_num: lengths["a_length"],
    	block_b_score: 0,
    	block_b_num: lengths["b_length"],
    	block_c_score: 0,
    	block_c_num: lengths["c_length"],
    	block_d_score: 0,
    	block_d_num: lengths["d_length"],
    	block_e_score: 0,
    	block_e_num: lengths["e_length"],
    	block_f_score: 0,
    	block_f_num: lengths["f_length"]
    });
	
	for (var i=0; i < num_questions; i++) {
    	var question = addQuestion(i);
    	questions.add(question);
    	question.save();
    }
    
    var exams = Alloy.Collections.exams;
    exams.add(exam);
    exam.save();
}
function getQuestionNumberById(sec, num) {
	Ti.API.info("Looking for id: " + num);
	var return_num = -1;
	var sec_length = i18n.getLength('root.sections.section[' + sec + '].questions.question');
	for (var i = 0; i < sec_length; i++) {
		if (i18n.getString('root.sections.section[' + sec + '].questions.question[' + i + ']').id == num) {
			Ti.API.info("Found it");
			return_num = i;
			i = sec_length;
		}
	}
	return return_num;
}
function addQuestion(num) {
	//Ti.API.debug(i18n.getString('root.sections.section[' + set.questions[num].s + '].questions.question[' + set.questions[num].n + ']').options.option[0]);
	var section = set.questions[num].s;
	var number;
	if (Alloy.Globals.purchases[1] == 1 || Alloy.Globals.purchases[section+2] == 1) {
	 	number = set.questions[num].n;
	 } else {
	 	//number = getQuestionNumberById(section, freeBlocks[section][set.questions[num].n]);
	 	number = set.questions[num].n;
	 }
	var question = Alloy.createModel('question', {
		exam_id: Alloy.Collections.exams.length,
		number: num + 1,
		id: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').id,
		block: section,
		question_txt: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').text,
		option1: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').options.option[0],
		option2: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').options.option[1],
		option3: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').options.option[2],
		option4: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').options.option[3],
		answer: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').answer,
		reference: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').reference,
		figure: i18n.getString('root.sections.section[' + section + '].questions.question[' + number + ']').figure,
		selected: 0,
		sumbmitted: 0,
		inReview: 0
	});
	return question;
}
function range(start, count)
{
    if(arguments.length == 1)
    {
        count = start;
        start = 0;
    }

    var foo = [];
    for (var i = 0; i < count; i++)
        foo.push(start + i);
    return foo;
}

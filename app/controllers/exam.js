var exams = Alloy.Collections.exams;
var exam = exams.at(exams.length-1);

var examJson = exam.toJSON();
var location;
var time = examJson.time;
var currentPage = examJson.location;
var timer;

$.title.text = examJson.type;
$.len.text = examJson.length;
$.lenT.text = examJson.length;
$.prog.text = examJson.progress;
$.progT.text = examJson.progress;
$.sv.currentPage = currentPage;

var percent = examJson.progress / examJson.length;

if (examJson.type == "Study Exam") {
        if(Alloy.isTablet){
$.greenbar.width = 600 * percent;
}
else{
$.greenbar.width = 240 * percent;
}

} else {
 if(Alloy.isTablet){
$.greenbarT.width = 360 * percent;
}else{
$.greenbarT.width = 108 * percent;
}

        $.timeLeft.text = getTime(time);
        $.noTimer.visible = false;
        $.withTimer.visible = true;
        timer = setInterval(function() {
                var localtime = exam.toJSON().time;
                localtime--;
         $.timeLeft.text = getTime(localtime);
         exam.set({
                        time: localtime
                });
                exam.save(null, { silent: true });
        }, 1000);
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

exam.on("change:location", function(e) {
        var transform = this.toJSON();
    $.sv.scrollToView(transform.location);
});

exam.on("change:progress", function(e) {
        var transform = this.toJSON();
        $.prog.text = transform.progress;
        $.progT.text = transform.progress;
        Ti.API.info("change:progress - " + transform.progress);
        percent = transform.progress / transform.length;
        if (transform.type == "Study Exam") {
            if(Alloy.isTablet){
               $.greenbar.width = 632 * percent;
               }
              else{
               $.greenbar.width = 240 * percent;
                 }

        } else {
                if(Alloy.isTablet){
                $.greenbarT.width = 360 * percent;
               }else{
               $.greenbarT.width = 108 * percent;
                 }

        }
});
function handleClose(e)         {
        Ti.API.info("clear timer interval");
        clearInterval(timer);
        $.destroy();
}
function closeModal(e) {
        $.win.fireEvent("exit", e);
}
function handleScrollEnd(e) {
        if (e.currentPage != undefined) {
                exam = exams.at(exams.length-1);
                exam.set({
                        location: e.currentPage
                }, {silent:true});
                exam.save(null, { silent: true });
        }
        
}
function filterFunction(collection) {
    return collection.where({exam_id:exams.length-1});
}
Alloy.Collections.questions.trigger('change');
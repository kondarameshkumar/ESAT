function Controller() {
    function __alloyId21() {
        __alloyId21.opts || {};
        var models = filterFunction(__alloyId20);
        var len = models.length;
        var views = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId19 = Alloy.createController("question_view", {
                $model: __alloyId17
            });
            views.push(__alloyId19.getViewEx({
                recurse: true
            }));
        }
        $.__views.sv.views = views;
    }
    function getTime(time) {
        var hours = Math.floor(time / 3600);
        time -= 3600 * hours;
        var minutes = Math.floor(time / 60);
        10 > minutes && (minutes = "0" + minutes);
        var seconds = time - 60 * minutes;
        10 > seconds && (seconds = "0" + seconds);
        return "0" + hours + ":" + minutes + ":" + seconds + "s left";
    }
    function handleClose() {
        Ti.API.info("clear timer interval");
        clearInterval(timer);
        $.destroy();
    }
    function closeModal(e) {
        $.win.fireEvent("exit", e);
    }
    function handleScrollEnd(e) {
        if (void 0 != e.currentPage) {
            exam = exams.at(exams.length - 1);
            exam.set({
                location: e.currentPage
            }, {
                silent: true
            });
            exam.save(null, {
                silent: true
            });
        }
    }
    function filterFunction(collection) {
        return collection.where({
            exam_id: exams.length - 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "exam";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        navBarHidden: "true",
        backgroundColor: "black"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    handleClose ? $.__views.win.addEventListener("close", handleClose) : __defers["$.__views.win!close!handleClose"] = true;
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        id: "__alloyId7"
    });
    $.__views.win.add($.__views.__alloyId7);
    $.__views.overlay = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            backgroundColor: "black",
            opacity: .47
        });
        _.extend(o, {
            id: "overlay"
        });
        return o;
    }());
    $.__views.__alloyId7.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "85%",
            height: "80%",
            borderRadius: 5,
            top: 20,
            backgroundColor: "black"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            top: 20
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.__alloyId7.add($.__views.modal);
    $.__views.vertical = Ti.UI.createView({
        layout: "vertical",
        id: "vertical"
    });
    $.__views.modal.add($.__views.vertical);
    $.__views.header = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: 0,
            backgroundColor: "#1b4fb4"
        });
        Alloy.isTablet && _.extend(o, {
            height: 60
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 45
        });
        _.extend(o, {
            id: "header"
        });
        return o;
    }());
    $.__views.vertical.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 21,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {
            text: "Exam",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.exit_btn = Alloy.createController("exit_btn", {
        id: "exit_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.exit_btn.setParent($.__views.header);
    closeModal ? $.__views.exit_btn.on("click", closeModal) : __defers["$.__views.exit_btn!click!closeModal"] = true;
    $.__views.__alloyId8 = Ti.UI.createView({
        height: "45",
        backgroundColor: "#f4f4f4",
        id: "__alloyId8"
    });
    $.__views.vertical.add($.__views.__alloyId8);
    $.__views.noTimer = Ti.UI.createView({
        id: "noTimer",
        width: "100%"
    });
    $.__views.__alloyId8.add($.__views.noTimer);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "40",
        left: "0",
        id: "__alloyId9"
    });
    $.__views.noTimer.add($.__views.__alloyId9);
    $.__views.prog = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#252525",
        text: "0",
        id: "prog"
    });
    $.__views.__alloyId9.add($.__views.prog);
    $.__views.__alloyId10 = Ti.UI.createView({
        left: "40",
        right: "40",
        id: "__alloyId10"
    });
    $.__views.noTimer.add($.__views.__alloyId10);
    $.__views.grad = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "15"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "25"
        });
        _.extend(o, {
            id: "grad",
            left: "0",
            right: "0",
            borderRadius: "5",
            backgroundColor: "#dadada"
        });
        return o;
    }());
    $.__views.__alloyId10.add($.__views.grad);
    $.__views.greenbar = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "15"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "25"
        });
        _.extend(o, {
            id: "greenbar",
            left: "0",
            width: "0",
            borderRadius: "5",
            backgroundColor: "#549104"
        });
        return o;
    }());
    $.__views.__alloyId10.add($.__views.greenbar);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: "40",
        right: "0",
        id: "__alloyId11"
    });
    $.__views.noTimer.add($.__views.__alloyId11);
    $.__views.len = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#252525",
        text: "30",
        id: "len"
    });
    $.__views.__alloyId11.add($.__views.len);
    $.__views.withTimer = Ti.UI.createView({
        id: "withTimer",
        width: "100%",
        visible: "false"
    });
    $.__views.__alloyId8.add($.__views.withTimer);
    $.__views.__alloyId12 = Ti.UI.createView({
        width: "40",
        left: "0",
        id: "__alloyId12"
    });
    $.__views.withTimer.add($.__views.__alloyId12);
    $.__views.progT = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#252525",
        text: "0",
        id: "progT"
    });
    $.__views.__alloyId12.add($.__views.progT);
    $.__views.__alloyId13 = Ti.UI.createView({
        left: "40",
        right: "172",
        id: "__alloyId13"
    });
    $.__views.withTimer.add($.__views.__alloyId13);
    $.__views.gradT = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "15"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "25"
        });
        _.extend(o, {
            id: "gradT",
            left: "0",
            right: "0",
            borderRadius: "5",
            backgroundColor: "#dadada"
        });
        return o;
    }());
    $.__views.__alloyId13.add($.__views.gradT);
    $.__views.greenbarT = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "15"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "25"
        });
        _.extend(o, {
            id: "greenbarT",
            left: "0",
            width: "0",
            borderRadius: "5",
            backgroundColor: "#549104"
        });
        return o;
    }());
    $.__views.__alloyId13.add($.__views.greenbarT);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: "40",
        right: "132",
        id: "__alloyId14"
    });
    $.__views.withTimer.add($.__views.__alloyId14);
    $.__views.lenT = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#252525",
        text: "30",
        id: "lenT"
    });
    $.__views.__alloyId14.add($.__views.lenT);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: "132",
        right: "0",
        id: "__alloyId15"
    });
    $.__views.withTimer.add($.__views.__alloyId15);
    $.__views.timeLeft = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#252525",
        text: "01:23:40s left",
        id: "timeLeft",
        width: "100%",
        textAlign: "center"
    });
    $.__views.__alloyId15.add($.__views.timeLeft);
    var __alloyId16 = [];
    $.__views.sv = Ti.UI.createScrollableView({
        views: __alloyId16,
        id: "sv"
    });
    $.__views.vertical.add($.__views.sv);
    var __alloyId20 = Alloy.Collections["questions"] || questions;
    __alloyId20.on("fetch destroy change add remove reset", __alloyId21);
    handleScrollEnd ? $.__views.sv.addEventListener("scrollEnd", handleScrollEnd) : __defers["$.__views.sv!scrollEnd!handleScrollEnd"] = true;
    exports.destroy = function() {
        __alloyId20.off("fetch destroy change add remove reset", __alloyId21);
    };
    _.extend($, $.__views);
    var exams = Alloy.Collections.exams;
    var exam = exams.at(exams.length - 1);
    var examJson = exam.toJSON();
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
    if ("Study Exam" == examJson.type) $.greenbar.width = Alloy.isTablet ? 600 * percent : 240 * percent; else {
        $.greenbarT.width = Alloy.isTablet ? 360 * percent : 108 * percent;
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
            exam.save(null, {
                silent: true
            });
        }, 1e3);
    }
    exam.on("change:location", function() {
        var transform = this.toJSON();
        $.sv.scrollToView(transform.location);
    });
    exam.on("change:progress", function() {
        var transform = this.toJSON();
        $.prog.text = transform.progress;
        $.progT.text = transform.progress;
        Ti.API.info("change:progress - " + transform.progress);
        percent = transform.progress / transform.length;
        "Study Exam" == transform.type ? $.greenbar.width = Alloy.isTablet ? 632 * percent : 240 * percent : $.greenbarT.width = Alloy.isTablet ? 360 * percent : 108 * percent;
    });
    Alloy.Collections.questions.trigger("change");
    __defers["$.__views.win!close!handleClose"] && $.__views.win.addEventListener("close", handleClose);
    __defers["$.__views.exit_btn!click!closeModal"] && $.__views.exit_btn.on("click", closeModal);
    __defers["$.__views.sv!scrollEnd!handleScrollEnd"] && $.__views.sv.addEventListener("scrollEnd", handleScrollEnd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
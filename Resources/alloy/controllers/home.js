function Controller() {
    function addExamListeners() {
        exams = Alloy.Collections.exams;
        if (exams.length > 0) {
            exam = exams.at(exams.length - 1);
            exam.on("change:time", function() {
                updateStatus(this);
            });
            exam.on("change:progress", function() {
                updateStatus(this);
            });
            exam.on("change:started", function() {
                var examJSON = this.toJSON();
                Ti.API.info("change:started: " + examJSON.started);
                if (1 == examJSON.started && 1 != examJSON.completed) {
                    $.start.visible = false;
                    $.in_progress.visible = true;
                }
            });
            exam.trigger("change:time");
            exam.trigger("change:started");
        }
    }
    function updateStatus(model) {
        var examJSON = model.toJSON();
        var percent = Math.floor(100 * (examJSON.progress / examJSON.length));
        var percentScore;
        var passText = " (Failed)";
        if (1 == examJSON.completed) {
            percentScore = Math.floor(100 * (examJSON.score / examJSON.length));
            percentScore > 79 && (passText = " (Passed)");
            Ti.API.info("examJSON.completed == 1");
            $.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
        } else if (exams.length > 1) {
            var pastExam = exams.at(exams.length - 2);
            var pastExamJson = pastExam.toJSON();
            percentScore = Math.floor(100 * (pastExamJson.score / pastExamJson.length));
            percentScore > 79 && (passText = " (Passed)");
            Ti.API.info("exams.length > 1");
            $.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
        }
        if (100 == percent && 0 == examJSON.completed) {
            $.start.visible = true;
            $.in_progress.visible = false;
            model.set({
                completed: 1
            });
            model.save();
            percentScore = Math.floor(100 * (examJSON.score / examJSON.length));
            percentScore > 79 && (passText = " (Passed)");
            Ti.API.info("percent == 100 && examJSON.completed == 0");
            $.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
            "Practice Exam" == examJSON.type && doExit();
        } else {
            var timeLeft = examJSON.time;
            if (0 == timeLeft && "Practice Exam" == examJSON.type) {
                $.start.visible = true;
                $.in_progress.visible = false;
                model.set({
                    completed: 1
                });
                model.save();
                percentScore = Math.floor(100 * (examJSON.score / examJSON.length));
                percentScore > 79 && (passText = " (Passed)");
                Ti.API.info("timeLeft == 0 && examJSON.type == 'Practice Exam'");
                $.past_results_btn.setDescription("Last Exam: " + percentScore + "%" + passText);
                doExit();
            } else 0 == timeLeft ? $.continue_btn.setDescription(percent + "% complete\nNo time limit") : $.continue_btn.setDescription(percent + "% complete\n" + getTime(timeLeft));
        }
    }
    function addOpen(controller) {
        new_controller = Alloy.createController(controller);
        new_view = new_controller.getView();
        new_view.addEventListener("removeClose", removeClose);
        new_window = Ti.UI.createWindow({
            navBarHidden: true,
            backgroundColor: "white"
        });
        new_window.add(new_view);
        new_window.open({
            modal: true
        });
    }
    function openAbout() {
        addOpen("about");
    }
    function openSettings() {
        addOpen("settings");
    }
    function continueExam() {
        Ti.API.debug("continueExam");
        indicator = Alloy.createController("indicator").getView();
        $.home.add(indicator);
        new_view = Alloy.createController("exam").getView();
        new_view.addEventListener("exit", exitExam);
        $.nav.open(new_view);
        $.home.remove(indicator);
    }
    function discardExam() {
        $.dialog.show();
    }
    function handleDiscardClick(e) {
        Ti.API.log(e.index);
        if (0 == e.index) {
            indicator = Alloy.createController("indicator").getView();
            exams.at(exams.length - 1).destroy();
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
    function openStudySettings() {
        addOpen("study_settings");
    }
    function openPracticeSettings() {
        addOpen("practice_settings");
    }
    function openSettings() {
        new_window = Alloy.createController("settings").getView();
        $.nav.open(new_window);
    }
    function openPastResults() {
        1 == exams.length && 1 == exams.at(exams.length - 1).toJSON().completed || exams.length > 1 ? addOpen("past_results") : alert("No exams taken yet");
    }
    function openStore() {
        addOpen("store");
    }
    function removeClose(e) {
        Ti.API.debug("start: " + e.start);
        if (e.start > 0) {
            type = e.start;
            new_window.addEventListener("close", startExam);
        }
        new_window.close();
        new_view.removeEventListener("removeClose", removeClose);
    }
    function startExam() {
        new_window.removeEventListener("close", startExam);
        indicator = Alloy.createController("indicator").getView();
        $.home.add(indicator);
        1 == type ? Ti.App.fireEvent("newStudy") : Ti.App.fireEvent("newPractice");
        ready = 1;
        Ti.API.debug("open: " + new_window);
    }
    function switchState() {
        Ti.API.info("switchState");
        exams = Alloy.Collections.exams;
        exam = exams.at(exams.length - 1);
        Ti.API.info("exam.toJSON().started: " + exam.toJSON().started);
        exam.set({
            started: 1
        });
        exam.save();
    }
    function exitExam() {
        doExit();
    }
    function doExit() {
        new_view.removeEventListener("open", switchState);
        new_view.removeEventListener("exit", exitExam);
        $.nav.close(new_view);
        exam = exams.at(exams.length - 1);
        1 == exam.toJSON().completed && discard();
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId26 = Ti.UI.createWindow({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        navBarHidden: "true",
        id: "__alloyId26"
    });
    $.__views.__alloyId27 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            backgroundColor: "#f1f1f1"
        });
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            top: 20
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "85%",
            height: "90%",
            borderRadius: 5
        });
        _.extend(o, {
            id: "__alloyId27"
        });
        return o;
    }());
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.header = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: 0,
            backgroundColor: "#f4f4f4"
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 45
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {});
        _.extend(o, {
            id: "header"
        });
        return o;
    }());
    $.__views.__alloyId27.add($.__views.header);
    $.__views.about = Alloy.createController("navbar_btn_home", {
        id: "about",
        text: "About",
        image: "icon-info",
        position: "left",
        __parentSymbol: $.__views.header
    });
    $.__views.about.setParent($.__views.header);
    openAbout ? $.__views.about.on("click", openAbout) : __defers["$.__views.about!click!openAbout"] = true;
    $.__views.image = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 120,
            height: 75,
            image: "/images/logo-csa-group.png"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            image: "/images/logo-csa-group-handheld.png"
        });
        _.extend(o, {
            id: "image"
        });
        return o;
    }());
    $.__views.header.add($.__views.image);
    $.__views.settings_btn_view = Alloy.createController("navbar_btn_home", {
        id: "settings_btn_view",
        text: "Settings",
        image: "icon-gears",
        position: "right",
        __parentSymbol: $.__views.header
    });
    $.__views.settings_btn_view.setParent($.__views.header);
    openSettings ? $.__views.settings_btn_view.on("click", openSettings) : __defers["$.__views.settings_btn_view!click!openSettings"] = true;
    $.__views.__alloyId28 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            top: 80,
            height: 1,
            backgroundGradient: {
                type: "linear",
                startPoint: {
                    x: "0%",
                    y: "0%"
                },
                endPoint: {
                    x: "0%",
                    y: "100%"
                },
                colors: [ "#b9b9b9", "#e3e3e3" ]
            }
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 45,
            height: 1,
            backgroundGradient: {
                type: "linear",
                startPoint: {
                    x: "0%",
                    y: "0%"
                },
                endPoint: {
                    x: "0%",
                    y: "100%"
                },
                colors: [ "#b9b9b9", "#e3e3e3" ]
            }
        });
        _.extend(o, {
            id: "__alloyId28"
        });
        return o;
    }());
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.content = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 10,
            right: 10,
            top: 45,
            bottom: 130
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "73.8%",
            left: 25,
            right: 25,
            top: 75
        });
        _.extend(o, {
            id: "content"
        });
        return o;
    }());
    $.__views.__alloyId27.add($.__views.content);
    $.__views.in_progress = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        id: "in_progress",
        visible: "false"
    });
    $.__views.content.add($.__views.in_progress);
    $.__views.instructions = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "35.2%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "18.9%"
        });
        _.extend(o, {
            id: "instructions"
        });
        return o;
    }());
    $.__views.in_progress.add($.__views.instructions);
    $.__views.instructions_text_container = Ti.UI.createView({
        height: "66%",
        width: "100%",
        backgroundColor: "#fffbea",
        borderRadius: 5,
        borderColor: "#e0d4a2",
        borderWidth: 1,
        id: "instructions_text_container"
    });
    $.__views.instructions.add($.__views.instructions_text_container);
    $.__views.instructions_text = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#927708"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#927708"
        });
        _.extend(o, {
            id: "instructions_text",
            text: "EXAM IN PROGRESS"
        });
        return o;
    }());
    $.__views.instructions_text_container.add($.__views.instructions_text);
    $.__views.in_progress_btns = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            height: "76.5%"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "vertical"
        });
        _.extend(o, {
            id: "in_progress_btns"
        });
        return o;
    }());
    $.__views.in_progress.add($.__views.in_progress_btns);
    $.__views.continue_btn = Alloy.createController("in_progress_btn", {
        id: "continue_btn",
        title: "Continue Exam",
        description: "",
        image: "icon-play",
        order: "1",
        __parentSymbol: $.__views.in_progress_btns
    });
    $.__views.continue_btn.setParent($.__views.in_progress_btns);
    continueExam ? $.__views.continue_btn.on("click", continueExam) : __defers["$.__views.continue_btn!click!continueExam"] = true;
    $.__views.discard_btn = Alloy.createController("discard_btn", {
        id: "discard_btn",
        title: "Discard current exam",
        description: "Progress will be lost, but you\nwill be able to start a new exam",
        image: "icon-discard",
        order: "2",
        __parentSymbol: $.__views.in_progress_btns
    });
    $.__views.discard_btn.setParent($.__views.in_progress_btns);
    discardExam ? $.__views.discard_btn.on("click", discardExam) : __defers["$.__views.discard_btn!click!discardExam"] = true;
    $.__views.start = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            top: 10,
            bottom: 10
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            left: 10,
            right: 10
        });
        _.extend(o, {
            id: "start"
        });
        return o;
    }());
    $.__views.content.add($.__views.start);
    $.__views.study_btn = Alloy.createController("mode_btn", {
        id: "study_btn",
        title: "Study Mode",
        description: "• Focus on specific subjects\n• Receive instant feedback",
        image: "icon-lightbulb",
        order: "1",
        __parentSymbol: $.__views.start
    });
    $.__views.study_btn.setParent($.__views.start);
    openStudySettings ? $.__views.study_btn.on("click", openStudySettings) : __defers["$.__views.study_btn!click!openStudySettings"] = true;
    $.__views.practice_btn = Alloy.createController("mode_btn", {
        id: "practice_btn",
        title: "Practice Mode",
        description: "• 100 random questions\n• Adjustable timer",
        disabledDescription: "You need to purchase at least one subject matter block to unlock this.",
        image: "icon-clock",
        order: "2",
        __parentSymbol: $.__views.start
    });
    $.__views.practice_btn.setParent($.__views.start);
    openPracticeSettings ? $.__views.practice_btn.on("click", openPracticeSettings) : __defers["$.__views.practice_btn!click!openPracticeSettings"] = true;
    $.__views.__alloyId29 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            bottom: 130,
            height: 1,
            backgroundGradient: {
                type: "linear",
                startPoint: {
                    x: "0%",
                    y: "0%"
                },
                endPoint: {
                    x: "0%",
                    y: "100%"
                },
                colors: [ "#e3e3e3", "#cbcbcb" ]
            }
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            bottom: 205,
            height: 1,
            backgroundGradient: {
                type: "linear",
                startPoint: {
                    x: "0%",
                    y: "0%"
                },
                endPoint: {
                    x: "0%",
                    y: "100%"
                },
                colors: [ "#e3e3e3", "#cbcbcb" ]
            }
        });
        _.extend(o, {
            id: "__alloyId29"
        });
        return o;
    }());
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.footer = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 130,
            left: 10,
            right: 10,
            bottom: 0
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "22%",
            left: 10,
            right: 10,
            bottom: 0
        });
        _.extend(o, {
            id: "footer"
        });
        return o;
    }());
    $.__views.__alloyId27.add($.__views.footer);
    $.__views.footer_vertical_align = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            height: "84.6%"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "horizontal",
            left: 10,
            right: 10
        });
        _.extend(o, {
            id: "footer_vertical_align"
        });
        return o;
    }());
    $.__views.footer.add($.__views.footer_vertical_align);
    $.__views.past_results_btn = Alloy.createController("footer_btn", {
        id: "past_results_btn",
        color: "#528d04",
        title: "View past result",
        description: "Last Exam: No exams taken yet",
        image: "/images/icon-results.png",
        order: "1",
        __parentSymbol: $.__views.footer_vertical_align
    });
    $.__views.past_results_btn.setParent($.__views.footer_vertical_align);
    openPastResults ? $.__views.past_results_btn.on("click", openPastResults) : __defers["$.__views.past_results_btn!click!openPastResults"] = true;
    $.__views.more_questions_btn = Alloy.createController("footer_btn", {
        id: "more_questions_btn",
        color: "#1855bc",
        title: "Get more questions",
        description: "You own 2/6 subject blocks",
        image: "/images/icon-book.png",
        order: "2",
        __parentSymbol: $.__views.footer_vertical_align
    });
    $.__views.more_questions_btn.setParent($.__views.footer_vertical_align);
    openStore ? $.__views.more_questions_btn.on("click", openStore) : __defers["$.__views.more_questions_btn!click!openStore"] = true;
    var __alloyId31 = [];
    __alloyId31.push("Yes");
    __alloyId31.push("No");
    $.__views.dialog = Ti.UI.createOptionDialog({
        options: __alloyId31,
        id: "dialog",
        title: "Are you sure?",
        destructive: "0"
    });
    handleDiscardClick ? $.__views.dialog.addEventListener("click", handleDiscardClick) : __defers["$.__views.dialog!click!handleDiscardClick"] = true;
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId26,
        id: "nav"
    });
    $.__views.home.add($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_controller;
    var new_view;
    var new_window;
    var indicator;
    var purchases = Alloy.Collections.purchase;
    Alloy.Models.settings;
    var exams = Alloy.Collections.exams;
    var exam;
    var length = 0;
    var ready = 0;
    Alloy.Globals.purchases = [ 1, 0, 0, 0, 0, 0, 0, 0 ];
    purchases.on("change", function() {
        var purchaseCount = 0;
        this.each(function(purchase) {
            var purchaseJSON = purchase.toJSON();
            if ("Full Set" == purchaseJSON.title && 1 == purchaseJSON.purchased) {
                Alloy.Globals.purchases[1] = 1;
                purchaseCount = 6;
            } else {
                purchaseCount += purchaseJSON.purchased;
                if (1 == purchaseJSON.purchased) {
                    "Block A" == purchaseJSON.description && (Alloy.Globals.purchases[2] = 1);
                    "Block B" == purchaseJSON.description && (Alloy.Globals.purchases[3] = 1);
                    "Block C" == purchaseJSON.description && (Alloy.Globals.purchases[4] = 1);
                    "Block D" == purchaseJSON.description && (Alloy.Globals.purchases[5] = 1);
                    "Block E" == purchaseJSON.description && (Alloy.Globals.purchases[6] = 1);
                    "Block F" == purchaseJSON.description && (Alloy.Globals.purchases[7] = 1);
                }
            }
        });
        purchaseCount > 6 && (purchaseCount = 6);
        $.more_questions_btn.setDescription("You own " + purchaseCount + "/6 subject blocks");
        1 > purchaseCount ? $.practice_btn.disableTouch() : $.practice_btn.enableTouch();
    });
    purchases.trigger("change");
    exams.on("destroy", function() {
        if (this.length != length) {
            addExamListeners();
            length = this.length;
        }
    });
    exams.on("change", function() {
        Ti.API.info("exams.length: " + this.length);
        if (this.length != length) {
            addExamListeners();
            length = this.length;
            if (1 == ready) {
                new_view = Alloy.createController("exam").getView();
                new_view.addEventListener("open", switchState);
                new_view.addEventListener("exit", exitExam);
                $.nav.open(new_view);
                $.home.remove(indicator);
                ready = 0;
            }
        }
    });
    exams.trigger("change");
    var type = 1;
    Ti.App.addEventListener("showLoading_new", function() {
        indicator = Alloy.createController("indicator").getView();
        new_window.add(indicator);
    });
    Ti.App.addEventListener("hideLoading_new", function() {
        new_window.remove(indicator);
    });
    $.home.open();
    __defers["$.__views.about!click!openAbout"] && $.__views.about.on("click", openAbout);
    __defers["$.__views.settings_btn_view!click!openSettings"] && $.__views.settings_btn_view.on("click", openSettings);
    __defers["$.__views.continue_btn!click!continueExam"] && $.__views.continue_btn.on("click", continueExam);
    __defers["$.__views.discard_btn!click!discardExam"] && $.__views.discard_btn.on("click", discardExam);
    __defers["$.__views.study_btn!click!openStudySettings"] && $.__views.study_btn.on("click", openStudySettings);
    __defers["$.__views.practice_btn!click!openPracticeSettings"] && $.__views.practice_btn.on("click", openPracticeSettings);
    __defers["$.__views.past_results_btn!click!openPastResults"] && $.__views.past_results_btn.on("click", openPastResults);
    __defers["$.__views.more_questions_btn!click!openStore"] && $.__views.more_questions_btn.on("click", openStore);
    __defers["$.__views.dialog!click!handleDiscardClick"] && $.__views.dialog.addEventListener("click", handleDiscardClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
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
        if (1 == answer) {
            $.a.backgroundColor = "#2d4216";
            $.aspace.backgroundColor = "#2d4216";
        } else if (2 == answer) {
            $.b.backgroundColor = "#2d4216";
            $.bspace.backgroundColor = "#2d4216";
        } else if (3 == answer) {
            $.c.backgroundColor = "#2d4216";
            $.cspace.backgroundColor = "#2d4216";
        } else if (4 == answer) {
            $.d.backgroundColor = "#2d4216";
            $.dspace.backgroundColor = "#2d4216";
        }
        if (answer != selected) if (1 == selected) {
            $.a.backgroundColor = "#4b1717";
            $.aspace.backgroundColor = "#4b1717";
        } else if (2 == selected) {
            $.b.backgroundColor = "#4b1717";
            $.bspace.backgroundColor = "#4b1717";
        } else if (3 == selected) {
            $.c.backgroundColor = "#4b1717";
            $.cspace.backgroundColor = "#4b1717";
        } else if (4 == selected) {
            $.d.backgroundColor = "#4b1717";
            $.dspace.backgroundColor = "#4b1717";
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
        if (1 == num) {
            $.img_0.image = "/images/checkbox-selected.png";
            lastClicked = $.img_0;
        } else if (2 == num) {
            $.img_1.image = "/images/checkbox-selected.png";
            lastClicked = $.img_1;
        } else if (3 == num) {
            $.img_2.image = "/images/checkbox-selected.png";
            lastClicked = $.img_2;
        } else if (4 == num) {
            $.img_3.image = "/images/checkbox-selected.png";
            lastClicked = $.img_3;
        }
        selected = num;
        $model.set({
            selected: num
        }, {
            silent: true
        });
        $model.save(null, {
            silent: true
        });
    }
    function clickA() {
        setSelected(1);
    }
    function clickB() {
        setSelected(2);
    }
    function clickC() {
        setSelected(3);
    }
    function clickD() {
        setSelected(4);
    }
    function reset() {
        0 != lastClicked && (lastClicked.image = "/images/checkbox.png");
    }
    function handleSkip() {
        if ($model.toJSON().number != examJson.length) {
            exam.set({
                location: $model.toJSON().number
            });
            exam.save();
        } else alert("You are on the last question.");
    }
    function handlePrev() {
        if (1 != $model.toJSON().number) {
            exam.set({
                location: $model.toJSON().number - 2
            });
            exam.save();
        } else alert("You are on the first question.");
    }
    function handleNext() {
        if ($model.toJSON().number != examJson.length) {
            exam.set({
                location: $model.toJSON().number
            });
            exam.save();
        } else alert("You are on the last question.");
    }
    function handleSubmit() {
        submitted = 1;
        exam = exams.at(exams.length - 1);
        examJson = exam.toJSON();
        var score = examJson.score;
        answer == selected && score++;
        var progress = examJson.progress;
        progress++;
        exam.set({
            progress: progress,
            score: score
        });
        exam.save();
        if (1 == settings.toJSON().instant_feedback && "Practice Exam" != examJson.type) {
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
        }, {
            silent: true
        });
        $model.save(null, {
            silent: true
        });
    }
    function handleAudioBtnClick() {
        if (playing) {
            playing && audioPlayer.stop();
            $.audio_btn_img.image = "/images/icon-play-tablet.png";
            playing = false;
            $.audio_btn_lbl.text = "Play Audio";
        } else if (Titanium.Network.online) {
            audioPlayer = Ti.Media.createAudioPlayer({
                url: "http://elearning.csa.ca/applications/electrical/exam/mp3/" + $model.toJSON().id + ".mp3"
            });
            audioPlayer.addEventListener("change", handleChange);
            audioPlayer.play();
            $.audio_btn_img.image = "/images/icon-stop.png";
            playing = true;
            $.audio_btn_lbl.text = "Stop Audio";
        } else alert("You must be connected to the internet to listen to audio clips");
    }
    function handleDiagramBtnClick() {
        Ti.API.info("handleDiagramBtnClick");
        if (Titanium.Network.online) {
            new_view = Alloy.createController("diagram", {
                image: "http://elearning.csa.ca/applications/electrical/exam/figures/" + modelJson.figure
            }).getView();
            new_view.addEventListener("removeClose", removeClose);
            new_window = Ti.UI.createWindow({
                navBarHidden: true,
                backgroundColor: "white"
            });
            new_window.add(new_view);
            new_window.open({
                modal: true
            });
        } else alert("You must be connected to the internet to view diagrams");
    }
    function handleFeedbackBtnClick() {
        Ti.API.info("handleFeedbackBtnClick");
        new_view = Alloy.createController("feedback", {
            text: modelJson.reference
        }).getView();
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
    function removeClose() {
        new_window.close();
        new_view.removeEventListener("removeClose", removeClose);
    }
    function handleChange(e) {
        Ti.API.info("State: " + e.description + " (" + e.state + ")");
        if (7 == e.state) {
            Ti.API.info("handleSoundComplete");
            $.audio_btn_img.image = "/images/icon-play-tablet.png";
            playing = false;
            $.audio_btn_lbl.text = "Play Audio";
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "question_view";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.question_view = Ti.UI.createScrollView({
        top: "0",
        bottom: "0",
        id: "question_view"
    });
    $.__views.question_view && $.addTopLevelView($.__views.question_view);
    $.__views.__alloyId88 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "10",
        id: "__alloyId88"
    });
    $.__views.question_view.add($.__views.__alloyId88);
    $.__views.card = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "10",
            bottom: "10"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            top: "30"
        });
        _.extend(o, {
            id: "card",
            borderRadius: "10",
            backgroundColor: "white",
            height: Ti.UI.SIZE,
            left: "10",
            right: "10",
            layout: "vertical"
        });
        return o;
    }());
    $.__views.__alloyId88.add($.__views.card);
    $.__views.__alloyId89 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 30
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 60
        });
        _.extend(o, {
            backgroundColor: "#f5f5f5",
            id: "__alloyId89"
        });
        return o;
    }());
    $.__views.card.add($.__views.__alloyId89);
    $.__views.num = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#444444"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#444444"
        });
        _.extend(o, {
            id: "num",
            text: "undefined" != typeof $model.__transform["number"] ? $model.__transform["number"] : $model.get("number")
        });
        return o;
    }());
    $.__views.__alloyId89.add($.__views.num);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: "100%",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.id = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 13,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#a0a0a0"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#a0a0a0"
        });
        _.extend(o, {
            id: "id",
            text: "undefined" != typeof $model.__transform["id"] ? $model.__transform["id"] : $model.get("id"),
            right: "10"
        });
        return o;
    }());
    $.__views.__alloyId90.add($.__views.id);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: "1",
        left: "0",
        right: "0",
        backgroundColor: "#dfdfdf",
        id: "__alloyId91"
    });
    $.__views.card.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: "10",
        right: "10",
        top: "10",
        id: "__alloyId92"
    });
    $.__views.card.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            left: "0",
            text: "undefined" != typeof $model.__transform["question_txt"] ? $model.__transform["question_txt"] : $model.get("question_txt"),
            id: "__alloyId93"
        });
        return o;
    }());
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        top: "10",
        height: "1",
        left: "0",
        right: "0",
        backgroundColor: "#dfdfdf",
        id: "__alloyId94"
    });
    $.__views.card.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 60
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 100
        });
        _.extend(o, {
            top: "0",
            left: "0",
            right: "0",
            backgroundColor: "#f5f5f5",
            layout: "horizontal",
            id: "__alloyId95"
        });
        return o;
    }());
    $.__views.card.add($.__views.__alloyId95);
    $.__views.audio_btn = Ti.UI.createView({
        id: "audio_btn",
        height: "100%",
        width: "34%",
        touchEnabled: "false"
    });
    $.__views.__alloyId95.add($.__views.audio_btn);
    handleAudioBtnClick ? $.__views.audio_btn.addEventListener("click", handleAudioBtnClick) : __defers["$.__views.audio_btn!click!handleAudioBtnClick"] = true;
    $.__views.__alloyId96 = Ti.UI.createView({
        width: "1",
        height: "100%",
        right: "0",
        backgroundColor: "#dfdfdf",
        id: "__alloyId96"
    });
    $.__views.audio_btn.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId97"
    });
    $.__views.audio_btn.add($.__views.__alloyId97);
    $.__views.audio_btn_img = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            image: "/images/icon-play-tablet.png"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40,
            width: 40,
            image: "/images/icon-play-tablet.png"
        });
        _.extend(o, {
            id: "audio_btn_img",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId97.add($.__views.audio_btn_img);
    $.__views.audio_btn_lbl = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            text: "Play Audio",
            id: "audio_btn_lbl",
            width: "100%",
            textAlign: "center",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId97.add($.__views.audio_btn_lbl);
    $.__views.diagram_btn = Ti.UI.createView({
        id: "diagram_btn",
        height: "100%",
        width: "34%",
        touchEnabled: "false"
    });
    $.__views.__alloyId95.add($.__views.diagram_btn);
    handleDiagramBtnClick ? $.__views.diagram_btn.addEventListener("click", handleDiagramBtnClick) : __defers["$.__views.diagram_btn!click!handleDiagramBtnClick"] = true;
    $.__views.__alloyId98 = Ti.UI.createView({
        width: "1",
        height: "100%",
        right: "0",
        backgroundColor: "#dfdfdf",
        id: "__alloyId98"
    });
    $.__views.diagram_btn.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId99"
    });
    $.__views.diagram_btn.add($.__views.__alloyId99);
    $.__views.diagram_btn_img = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            image: "/images/icon-diagram.png"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40,
            width: 40,
            image: "/images/icon-diagram.png"
        });
        _.extend(o, {
            id: "diagram_btn_img",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId99.add($.__views.diagram_btn_img);
    $.__views.diagram_btn_lbl = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            text: "Diagram",
            id: "diagram_btn_lbl",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId99.add($.__views.diagram_btn_lbl);
    $.__views.feedback_btn = Ti.UI.createView({
        id: "feedback_btn",
        height: "100%",
        width: "32%",
        touchEnabled: "false"
    });
    $.__views.__alloyId95.add($.__views.feedback_btn);
    handleFeedbackBtnClick ? $.__views.feedback_btn.addEventListener("click", handleFeedbackBtnClick) : __defers["$.__views.feedback_btn!click!handleFeedbackBtnClick"] = true;
    $.__views.__alloyId100 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId100"
    });
    $.__views.feedback_btn.add($.__views.__alloyId100);
    $.__views.feedback_btn_img = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            image: "/images/icon-feedback.png"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40,
            width: 40,
            image: "/images/icon-feedback.png"
        });
        _.extend(o, {
            id: "feedback_btn_img",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId100.add($.__views.feedback_btn_img);
    $.__views.feedback_btn_lbl = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            text: "Feedback",
            id: "feedback_btn_lbl",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId100.add($.__views.feedback_btn_lbl);
    $.__views.__alloyId101 = Ti.UI.createView({
        backgroundColor: "#3d3d3d",
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId101"
    });
    $.__views.card.add($.__views.__alloyId101);
    $.__views.a = Ti.UI.createView({
        id: "a",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId101.add($.__views.a);
    clickA ? $.__views.a.addEventListener("click", clickA) : __defers["$.__views.a!click!clickA"] = true;
    $.__views.__alloyId102 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "A)",
            color: "#ffffff",
            height: Ti.UI.SIZE,
            top: "10",
            left: "12",
            id: "__alloyId102"
        });
        return o;
    }());
    $.__views.a.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId103"
    });
    $.__views.a.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "30",
            right: "35"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "45",
            right: "50"
        });
        _.extend(o, {
            height: Ti.UI.SIZE,
            color: "#ffffff",
            text: "undefined" != typeof $model.__transform["option1"] ? $model.__transform["option1"] : $model.get("option1"),
            id: "__alloyId104"
        });
        return o;
    }());
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.img_0 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 30,
            height: 30
        });
        _.extend(o, {
            id: "img_0",
            right: "10",
            height: Ti.UI.SIZE,
            image: "/images/checkbox.png"
        });
        return o;
    }());
    $.__views.__alloyId103.add($.__views.img_0);
    $.__views.aspace = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 10
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40
        });
        _.extend(o, {
            id: "aspace"
        });
        return o;
    }());
    $.__views.__alloyId101.add($.__views.aspace);
    $.__views.__alloyId105 = Ti.UI.createView({
        top: "0",
        left: "0",
        right: "0",
        height: "1",
        backgroundColor: "#2b2b2b",
        id: "__alloyId105"
    });
    $.__views.__alloyId101.add($.__views.__alloyId105);
    $.__views.b = Ti.UI.createView({
        id: "b",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId101.add($.__views.b);
    clickB ? $.__views.b.addEventListener("click", clickB) : __defers["$.__views.b!click!clickB"] = true;
    $.__views.__alloyId106 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "B)",
            color: "#ffffff",
            height: Ti.UI.SIZE,
            top: "10",
            left: "10",
            id: "__alloyId106"
        });
        return o;
    }());
    $.__views.b.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.b.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "30",
            right: "35"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "45",
            right: "50"
        });
        _.extend(o, {
            height: Ti.UI.SIZE,
            color: "#ffffff",
            text: "undefined" != typeof $model.__transform["option2"] ? $model.__transform["option2"] : $model.get("option2"),
            id: "__alloyId108"
        });
        return o;
    }());
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.img_1 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 30,
            height: 30
        });
        _.extend(o, {
            id: "img_1",
            right: "10",
            height: Ti.UI.SIZE,
            image: "/images/checkbox.png"
        });
        return o;
    }());
    $.__views.__alloyId107.add($.__views.img_1);
    $.__views.bspace = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 10
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40
        });
        _.extend(o, {
            id: "bspace"
        });
        return o;
    }());
    $.__views.__alloyId101.add($.__views.bspace);
    $.__views.__alloyId109 = Ti.UI.createView({
        top: "0",
        left: "0",
        right: "0",
        height: "1",
        backgroundColor: "#2b2b2b",
        id: "__alloyId109"
    });
    $.__views.__alloyId101.add($.__views.__alloyId109);
    $.__views.c = Ti.UI.createView({
        id: "c",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId101.add($.__views.c);
    clickC ? $.__views.c.addEventListener("click", clickC) : __defers["$.__views.c!click!clickC"] = true;
    $.__views.__alloyId110 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "C)",
            color: "#ffffff",
            height: Ti.UI.SIZE,
            top: "10",
            left: "10",
            id: "__alloyId110"
        });
        return o;
    }());
    $.__views.c.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId111"
    });
    $.__views.c.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "30",
            right: "35"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "45",
            right: "50"
        });
        _.extend(o, {
            height: Ti.UI.SIZE,
            color: "#ffffff",
            text: "undefined" != typeof $model.__transform["option3"] ? $model.__transform["option3"] : $model.get("option3"),
            id: "__alloyId112"
        });
        return o;
    }());
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.img_2 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 30,
            height: 30
        });
        _.extend(o, {
            id: "img_2",
            right: "10",
            height: Ti.UI.SIZE,
            image: "/images/checkbox.png"
        });
        return o;
    }());
    $.__views.__alloyId111.add($.__views.img_2);
    $.__views.cspace = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 10
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40
        });
        _.extend(o, {
            id: "cspace"
        });
        return o;
    }());
    $.__views.__alloyId101.add($.__views.cspace);
    $.__views.__alloyId113 = Ti.UI.createView({
        top: "0",
        left: "0",
        right: "0",
        height: "1",
        backgroundColor: "#2b2b2b",
        id: "__alloyId113"
    });
    $.__views.__alloyId101.add($.__views.__alloyId113);
    $.__views.d = Ti.UI.createView({
        id: "d",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId101.add($.__views.d);
    clickD ? $.__views.d.addEventListener("click", clickD) : __defers["$.__views.d!click!clickD"] = true;
    $.__views.__alloyId114 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "D)",
            color: "#ffffff",
            height: Ti.UI.SIZE,
            top: "10",
            left: "10",
            id: "__alloyId114"
        });
        return o;
    }());
    $.__views.d.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId115"
    });
    $.__views.d.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "30",
            right: "35"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "45",
            right: "50"
        });
        _.extend(o, {
            height: Ti.UI.SIZE,
            color: "#ffffff",
            text: "undefined" != typeof $model.__transform["option4"] ? $model.__transform["option4"] : $model.get("option4"),
            id: "__alloyId116"
        });
        return o;
    }());
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.img_3 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 30,
            height: 30
        });
        _.extend(o, {
            id: "img_3",
            right: "10",
            height: Ti.UI.SIZE,
            image: "/images/checkbox.png"
        });
        return o;
    }());
    $.__views.__alloyId115.add($.__views.img_3);
    $.__views.dspace = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 10
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40
        });
        _.extend(o, {
            id: "dspace"
        });
        return o;
    }());
    $.__views.__alloyId101.add($.__views.dspace);
    $.__views.__alloyId117 = Ti.UI.createView({
        top: "0",
        left: "0",
        right: "0",
        height: "1",
        backgroundColor: "#2b2b2b",
        id: "__alloyId117"
    });
    $.__views.__alloyId101.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "55"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "80"
        });
        _.extend(o, {
            backgroundColor: "#fafafa",
            id: "__alloyId118"
        });
        return o;
    }());
    $.__views.card.add($.__views.__alloyId118);
    $.__views.skipSumit = Ti.UI.createView({
        width: "100%",
        id: "skipSumit"
    });
    $.__views.__alloyId118.add($.__views.skipSumit);
    $.__views.__alloyId119 = Ti.UI.createView({
        left: "0",
        width: "50%",
        id: "__alloyId119"
    });
    $.__views.skipSumit.add($.__views.__alloyId119);
    $.__views.skip = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
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
                colors: [ "rgba(250,250,250,0.20)", "rgba(0,0,0,0.20)" ]
            }
        });
        Alloy.isHandheld && _.extend(o, {
            width: "137",
            height: "37"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "160",
            height: "50"
        });
        _.extend(o, {
            id: "skip",
            backgroundColor: "#989898",
            borderRadius: "5",
            borderWidth: "1",
            borderColor: "#505050"
        });
        return o;
    }());
    $.__views.__alloyId119.add($.__views.skip);
    handleSkip ? $.__views.skip.addEventListener("click", handleSkip) : __defers["$.__views.skip!click!handleSkip"] = true;
    $.__views.__alloyId120 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Skip",
            color: "white",
            id: "__alloyId120"
        });
        return o;
    }());
    $.__views.skip.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        right: "0",
        width: "50%",
        id: "__alloyId121"
    });
    $.__views.skipSumit.add($.__views.__alloyId121);
    $.__views.submit = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
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
                colors: [ "rgba(250,250,250,0.20)", "rgba(0,0,0,0.20)" ]
            }
        });
        Alloy.isHandheld && _.extend(o, {
            width: "137",
            height: "37"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "160",
            height: "50"
        });
        _.extend(o, {
            id: "submit",
            backgroundColor: "#499822",
            borderRadius: "5",
            borderWidth: "1",
            borderColor: "#505050",
            touchEnabled: "false",
            opacity: "0.5"
        });
        return o;
    }());
    $.__views.__alloyId121.add($.__views.submit);
    handleSubmit ? $.__views.submit.addEventListener("click", handleSubmit) : __defers["$.__views.submit!click!handleSubmit"] = true;
    $.__views.__alloyId122 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Submit",
            color: "white",
            id: "__alloyId122"
        });
        return o;
    }());
    $.__views.submit.add($.__views.__alloyId122);
    $.__views.prevNext = Ti.UI.createView({
        width: "100%",
        id: "prevNext",
        visible: "false"
    });
    $.__views.__alloyId118.add($.__views.prevNext);
    $.__views.__alloyId123 = Ti.UI.createView({
        left: "0",
        width: "50%",
        id: "__alloyId123"
    });
    $.__views.prevNext.add($.__views.__alloyId123);
    $.__views.prev = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
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
                colors: [ "rgba(250,250,250,0.20)", "rgba(0,0,0,0.20)" ]
            }
        });
        Alloy.isHandheld && _.extend(o, {
            width: "137",
            height: "37"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "160",
            height: "50"
        });
        _.extend(o, {
            id: "prev",
            backgroundColor: "#499822",
            borderRadius: "5",
            borderWidth: "1",
            borderColor: "#505050"
        });
        return o;
    }());
    $.__views.__alloyId123.add($.__views.prev);
    handlePrev ? $.__views.prev.addEventListener("click", handlePrev) : __defers["$.__views.prev!click!handlePrev"] = true;
    $.__views.__alloyId124 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Previous",
            color: "white",
            id: "__alloyId124"
        });
        return o;
    }());
    $.__views.prev.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        right: "0",
        width: "50%",
        id: "__alloyId125"
    });
    $.__views.prevNext.add($.__views.__alloyId125);
    $.__views.next = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
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
                colors: [ "rgba(250,250,250,0.20)", "rgba(0,0,0,0.20)" ]
            }
        });
        Alloy.isHandheld && _.extend(o, {
            width: "137",
            height: "37"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "160",
            height: "50"
        });
        _.extend(o, {
            id: "next",
            backgroundColor: "#499822",
            borderRadius: "5",
            borderWidth: "1",
            borderColor: "#505050"
        });
        return o;
    }());
    $.__views.__alloyId125.add($.__views.next);
    handleNext ? $.__views.next.addEventListener("click", handleNext) : __defers["$.__views.next!click!handleNext"] = true;
    $.__views.__alloyId126 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Next",
            color: "white",
            id: "__alloyId126"
        });
        return o;
    }());
    $.__views.next.add($.__views.__alloyId126);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_window;
    var new_view;
    var exams = Alloy.Collections.exams;
    var settings = Alloy.Models.settings;
    var exam = exams.at(exams.length - 1);
    var examJson = exam.toJSON();
    var lastClicked = 0;
    var instant = 0;
    var modelJson = $model.toJSON();
    var answer = modelJson.answer;
    var selected = modelJson.selected;
    var submitted = modelJson.submitted;
    var inReview = modelJson.inReview;
    if ("Practice Exam" != examJson.type) {
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
    if (1 == inReview) setInReview(); else if (1 == submitted) {
        setSelected(selected);
        setSubmitted();
    } else 0 != selected && setSelected(selected);
    var audioPlayer;
    var playing = false;
    __defers["$.__views.audio_btn!click!handleAudioBtnClick"] && $.__views.audio_btn.addEventListener("click", handleAudioBtnClick);
    __defers["$.__views.diagram_btn!click!handleDiagramBtnClick"] && $.__views.diagram_btn.addEventListener("click", handleDiagramBtnClick);
    __defers["$.__views.feedback_btn!click!handleFeedbackBtnClick"] && $.__views.feedback_btn.addEventListener("click", handleFeedbackBtnClick);
    __defers["$.__views.a!click!clickA"] && $.__views.a.addEventListener("click", clickA);
    __defers["$.__views.b!click!clickB"] && $.__views.b.addEventListener("click", clickB);
    __defers["$.__views.c!click!clickC"] && $.__views.c.addEventListener("click", clickC);
    __defers["$.__views.d!click!clickD"] && $.__views.d.addEventListener("click", clickD);
    __defers["$.__views.skip!click!handleSkip"] && $.__views.skip.addEventListener("click", handleSkip);
    __defers["$.__views.submit!click!handleSubmit"] && $.__views.submit.addEventListener("click", handleSubmit);
    __defers["$.__views.prev!click!handlePrev"] && $.__views.prev.addEventListener("click", handlePrev);
    __defers["$.__views.next!click!handleNext"] && $.__views.next.addEventListener("click", handleNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function setScore(json) {
        $.type.text = json.type;
        $.date.text = json.date;
        var percentage = 100 * (json.score / json.length);
        if (51 > percentage) {
            $.bg.backgroundColor = "#be0d0d";
            $.feedbackStatement.text = "Needs improvement!";
        } else if (81 > percentage) {
            $.bg.backgroundColor = "#e97314";
            $.feedbackStatement.text = "Keep practicing";
        } else {
            $.bg.backgroundColor = "#149c0a";
            $.feedbackStatement.text = "Well done!";
        }
        $.generalFeedback.text = "Visit our store for additonal questions and resources.";
        $.score.text = json.score + "/" + json.length;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "past_results";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            backgroundColor: "black"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "black"
        });
        _.extend(o, {
            id: "main"
        });
        return o;
    }());
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId45 = Ti.UI.createView({
        top: 20,
        backgroundColor: "black",
        id: "__alloyId45"
    });
    $.__views.main.add($.__views.__alloyId45);
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
    $.__views.__alloyId45.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "93%",
            height: "93%",
            borderRadius: 5,
            backgroundColor: "white"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            backgroundColor: "white"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.__alloyId45.add($.__views.modal);
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
    $.__views.modal.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
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
            text: "Past Result",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.done_btn = Alloy.createController("done_btn", {
        id: "done_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.done_btn.setParent($.__views.header);
    closeModal ? $.__views.done_btn.on("click", closeModal) : __defers["$.__views.done_btn!click!closeModal"] = true;
    $.__views.type = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            left: "10",
            top: "65",
            color: "#666666"
        });
        Alloy.isTablet && _.extend(o, {
            left: "10",
            top: "100",
            color: "#666666"
        });
        _.extend(o, {
            id: "type"
        });
        return o;
    }());
    $.__views.modal.add($.__views.type);
    $.__views.date = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            right: "10",
            top: "65",
            color: "#666666"
        });
        Alloy.isTablet && _.extend(o, {
            right: "10",
            top: "100",
            color: "#666666"
        });
        _.extend(o, {
            id: "date",
            textAlign: "right"
        });
        return o;
    }());
    $.__views.modal.add($.__views.date);
    $.__views.feedbackStatement = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#c91414",
            top: "105",
            left: "165"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#c91414",
            top: "160",
            left: "300"
        });
        _.extend(o, {
            id: "feedbackStatement"
        });
        return o;
    }());
    $.__views.modal.add($.__views.feedbackStatement);
    $.__views.generalFeedback = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "125",
            left: "165",
            width: "150"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Roman"
            },
            top: "200",
            left: "300",
            width: "250"
        });
        _.extend(o, {
            id: "generalFeedback"
        });
        return o;
    }());
    $.__views.modal.add($.__views.generalFeedback);
    $.__views.__alloyId46 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "10",
            right: "10",
            top: "140"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "10",
            right: "10",
            top: "95"
        });
        _.extend(o, {
            height: "1",
            backgroundColor: "#b5b5b5",
            id: "__alloyId46"
        });
        return o;
    }());
    $.__views.modal.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: "20",
            width: "255",
            height: "155",
            top: "160"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: "10",
            width: "145",
            height: "80",
            top: "105"
        });
        _.extend(o, {
            backgroundColor: "#383838",
            borderRadius: "5",
            id: "__alloyId47"
        });
        return o;
    }());
    $.__views.modal.add($.__views.__alloyId47);
    $.__views.scoreLbl = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            color: "fff"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "fff"
        });
        _.extend(o, {
            text: "Your Score",
            id: "scoreLbl",
            top: "5"
        });
        return o;
    }());
    $.__views.__alloyId47.add($.__views.scoreLbl);
    $.__views.bg = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "25",
            bottom: "5"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            top: "45",
            bottom: "10"
        });
        _.extend(o, {
            id: "bg",
            left: "5",
            right: "5",
            borderRadius: "5",
            backgroundColor: "#149c0a"
        });
        return o;
    }());
    $.__views.__alloyId47.add($.__views.bg);
    $.__views.score = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222"
        });
        _.extend(o, {
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#fff"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 45,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#fff"
        });
        _.extend(o, {
            id: "score"
        });
        return o;
    }());
    $.__views.bg.add($.__views.score);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var exams = Alloy.Collections.exams;
    var exam = exams.at(exams.length - 1);
    var examJSON = exam.toJSON();
    if (1 == examJSON.completed) setScore(examJSON); else if (exams.length > 1) {
        var pastExam = exams.at(exams.length - 2);
        var pastExamJson = pastExam.toJSON();
        setScore(pastExamJson);
    }
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
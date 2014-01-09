function Controller() {
    function closeModal() {
        $.win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "questions_packs_BlockC";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 5,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {
            id: "win",
            navBarHidden: "true"
        });
        return o;
    }());
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical"
    });
    $.__views.win.add($.__views.vertical);
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
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: 35,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#fff",
        text: "Block C",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.done_btn = Alloy.createController("done_btn", {
        id: "done_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.done_btn.setParent($.__views.header);
    closeModal ? $.__views.done_btn.on("click", closeModal) : __defers["$.__views.done_btn!click!closeModal"] = true;
    $.__views.scrollView = Ti.UI.createScrollView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            top: 45,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            width: "99%",
            height: "90%",
            top: 80
        });
        _.extend(o, {
            id: "scrollView",
            showVerticalScrollIndicator: "true"
        });
        return o;
    }());
    $.__views.vertical.add($.__views.scrollView);
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            top: 10,
            left: 10
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 10,
            left: 10
        });
        _.extend(o, {
            text: "Wiring Methods :",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.horizontal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            top: 20,
            left: 20,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            top: 10,
            left: 5,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {
            id: "horizontal"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.horizontal);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222",
            left: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222",
            left: 0
        });
        _.extend(o, {
            text: "The Canadian Electrician C of Q (Certificate of Qualification) Practice Tool is based on the 2012 Canadian Electrical Code and the 2011 Red Seal National Occupational Analysis.\n\nProviding adequate training to employees is a critical element of risk management and can help promote health & safety on the job. Each year, many organizations in Canada make significant investments in providing safety training to workers yet often have difficulty ensuring that it meets their needs.\n						To help organizations invest limited training resources effectively, CSA Z1001 Occupational Health and Safety Training, provides the essentials of managing a health and safety training program and a method to recognize OHS training practices. The standard helps organizations identify their training needs, set their requirements and select training products and services that will effectively meet their requirements. It also helps organizations work with training providers to ensure that OHS training courses are designed, developed, and delivered with appropriate input and expertise.\n						Z1001 is part of CSA Group's portfolio of OHS Management Systems Standards, based on the foundation established by Z1000 Occupational Health and Safety Management.\n\nHighlights of Z1001 Include:\n\n    					Requirements for management and administration of OHS training and guidance on identifying OHS training needs\n    					Guidance on developing, implementing and maintaining appropriate OHS training program and courses\n    					Guidance on selecting training providers with appropriate qualifications\n    					Informative Annexes on how to implement the requirements of the standard\n    					Valuable samples of a training matrix, course evaluation form, and training assessment surveys.",
            id: "description"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var formFactor = "handheld";
    Alloy.isTablet && (formFactor = "tablet");
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
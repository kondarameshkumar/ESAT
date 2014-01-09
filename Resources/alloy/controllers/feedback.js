function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedback";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Models.instance("user");
    $.__views.feedback = Ti.UI.createView({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        id: "feedback"
    });
    $.__views.feedback && $.addTopLevelView($.__views.feedback);
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
    $.__views.feedback.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "85%",
            height: "90%",
            borderRadius: 5,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.feedback.add($.__views.modal);
    $.__views.vertical = Ti.UI.createView({
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
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 30,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#fff",
        text: "Feedback",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.done_btn = Alloy.createController("done_btn", {
        id: "done_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.done_btn.setParent($.__views.header);
    closeModal ? $.__views.done_btn.on("click", closeModal) : __defers["$.__views.done_btn!click!closeModal"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        layout: "vertical",
        top: 45,
        bottom: 0,
        id: "scrollView",
        showVerticalScrollIndicator: "true"
    });
    $.__views.vertical.add($.__views.scrollView);
    $.__views.horizontal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "horizontal",
            top: 20,
            left: 20,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "horizontal",
            top: 10,
            left: 10,
            right: 10,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {
            id: "horizontal"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.horizontal);
    $.__views.feedback_txt = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "feedback_txt"
    });
    $.__views.horizontal.add($.__views.feedback_txt);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.feedback_txt.text = args.text;
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
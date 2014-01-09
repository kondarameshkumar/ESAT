function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diagram";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Models.instance("user");
    $.__views.diagram = Ti.UI.createView({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        id: "diagram"
    });
    $.__views.diagram && $.addTopLevelView($.__views.diagram);
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
    $.__views.diagram.add($.__views.overlay);
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
            backgroundColor: "#ffffff"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.diagram.add($.__views.modal);
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
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
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
            text: "Diagram",
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
    $.__views.iv = Ti.UI.createImageView({
        id: "iv",
        top: "55",
        left: "10",
        right: "10",
        bottom: "10"
    });
    $.__views.modal.add($.__views.iv);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.iv.image = args.image;
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_full_length";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container_view = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "24.1%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "50%"
        });
        _.extend(o, {
            id: "container_view"
        });
        return o;
    }());
    $.__views.container_view && $.addTopLevelView($.__views.container_view);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal"
        });
        Alloy.isTablet && _.extend(o, {
            width: "100%",
            height: 70
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            height: "96.2%"
        });
        _.extend(o, {
            id: "button_container"
        });
        return o;
    }());
    $.__views.container_view.add($.__views.button_container);
    $.__views.icon_container = Ti.UI.createView({
        backgroundColor: "#f5f5f5",
        width: 50,
        height: "100%",
        top: 0,
        id: "icon_container"
    });
    $.__views.button_container.add($.__views.icon_container);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.icon_container.add($.__views.icon);
    $.__views.__alloyId216 = Ti.UI.createView({
        width: 1,
        top: 0,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.10)",
        id: "__alloyId216"
    });
    $.__views.button_container.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            left: 10
        });
        Alloy.isTablet && _.extend(o, {
            height: 56
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 52
        });
        _.extend(o, {
            id: "__alloyId217"
        });
        return o;
    }());
    $.__views.button_container.add($.__views.__alloyId217);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            top: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 30
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 16
        });
        _.extend(o, {
            id: "title"
        });
        return o;
    }());
    $.__views.__alloyId217.add($.__views.title);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "#666666",
            left: 0,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            height: 40
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            },
            height: 30
        });
        _.extend(o, {
            id: "description"
        });
        return o;
    }());
    $.__views.__alloyId217.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var formFactor = "handheld";
    Alloy.isTablet && (formFactor = "tablet");
    $.icon.image = "/images/" + args.image + "-" + formFactor + ".png";
    $.title.text = args.title;
    $.description.text = args.description;
    var buy_btn = Alloy.createController("buy_btn", args).getView();
    buy_btn.addEventListener("click", function(e) {
        void 0 != e.productid && $.trigger("click", e);
    });
    exports.markProductAsPurchased = function() {
        buy_btn.markProductAsPurchased();
    };
    $.container_view.add(buy_btn);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
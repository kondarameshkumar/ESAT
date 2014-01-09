function Controller() {
    function handleBtnTouchStart() {
        $.button_container.backgroundColor = "#dadada";
        $.icon_container.backgroundColor = "#d5d5d5";
    }
    function handleBtnTouchEnd(e) {
        if (move) move = false; else {
            $.button_container.backgroundColor = "#fafafa";
            $.icon_container.backgroundColor = "#f5f5f5";
            $.trigger("click", e);
        }
    }
    function handleBtnTouchMove() {
        $.button_container.backgroundColor = "#fafafa";
        $.icon_container.backgroundColor = "#f5f5f5";
        move = true;
    }
    function handleBtnTouchCancel() {
        $.button_container.backgroundColor = "#fafafa";
        $.icon_container.backgroundColor = "#f5f5f5";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mode_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mode_btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "45%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "50%"
        });
        _.extend(o, {
            id: "mode_btn"
        });
        return o;
    }());
    $.__views.mode_btn && $.addTopLevelView($.__views.mode_btn);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal",
            backgroundColor: "#fafafa",
            borderRadius: 5,
            borderColor: "#cecece",
            borderWidth: 1
        });
        Alloy.isTablet && _.extend(o, {
            top: 20,
            bottom: 10
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
    $.__views.mode_btn.add($.__views.button_container);
    handleBtnTouchStart ? $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.icon_container = Ti.UI.createView({
        backgroundColor: "#f5f5f5",
        width: "20%",
        height: "100%",
        id: "icon_container"
    });
    $.__views.button_container.add($.__views.icon_container);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.icon_container.add($.__views.icon);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: 1,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.10)",
        id: "__alloyId40"
    });
    $.__views.button_container.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            left: 10,
            width: Ti.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 52
        });
        _.extend(o, {
            id: "__alloyId41"
        });
        return o;
    }());
    $.__views.button_container.add($.__views.__alloyId41);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            top: 0,
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 36
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
    $.__views.__alloyId41.add($.__views.title);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "#666666",
            left: 0,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Roman"
            },
            height: 70,
            top: 20
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            },
            height: 30,
            width: 200
        });
        _.extend(o, {
            id: "description"
        });
        return o;
    }());
    $.__views.__alloyId41.add($.__views.description);
    $.__views.lock = Ti.UI.createImageView({
        id: "lock",
        image: "/images/icon-lock.png",
        visible: "false"
    });
    $.__views.button_container.add($.__views.lock);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var move = false;
    var formFactor = "handheld";
    if (Alloy.isTablet) {
        1 == args.order ? $.button_container.left = 0 : $.button_container.right = 0;
        formFactor = "tablet";
    } else 1 == args.order ? $.button_container.top = 0 : $.button_container.bottom = 0;
    $.icon.image = "/images/" + args.image + "-" + formFactor + ".png";
    $.title.text = args.title;
    $.description.text = args.description;
    exports.disableTouch = function() {
        $.button_container.touchEnabled = false;
        $.button_container.backgroundColor = "#cccccc";
        $.icon_container.backgroundColor = "#bbbbbb";
        $.title.color = "#5e5e5e";
        $.description.color = "#666666";
        $.lock.visible = true;
        $.description.text = args.disabledDescription;
    };
    exports.enableTouch = function() {
        $.button_container.touchEnabled = true;
        $.button_container.backgroundColor = "#fafafa";
        $.icon_container.backgroundColor = "#f5f5f5";
        $.title.color = "#222222";
        $.description.color = "#666666";
        $.lock.visible = false;
        $.description.text = args.description;
    };
    __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] && $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] && $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] && $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] && $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
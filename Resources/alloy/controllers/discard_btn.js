function Controller() {
    function handleBtnTouchStart() {
        $.icon_container.backgroundColor = "#520303";
        $.button_container.backgroundColor = "#650404";
    }
    function handleBtnTouchEnd(e) {
        if (move) move = false; else {
            $.button_container.backgroundColor = colors[0];
            $.icon_container.backgroundColor = colors[1];
            $.trigger("click", e);
        }
    }
    function handleBtnTouchMove() {
        $.button_container.backgroundColor = colors[0];
        $.icon_container.backgroundColor = colors[1];
        move = true;
    }
    function handleBtnTouchCancel() {
        $.button_container.backgroundColor = colors[0];
        $.icon_container.backgroundColor = colors[0];
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "discard_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.discard_btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "40%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "50%"
        });
        _.extend(o, {
            id: "discard_btn"
        });
        return o;
    }());
    $.__views.discard_btn && $.addTopLevelView($.__views.discard_btn);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal",
            borderRadius: 5
        });
        Alloy.isTablet && _.extend(o, {
            width: "100%",
            top: 0,
            height: "89%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            height: "93%"
        });
        _.extend(o, {
            id: "button_container"
        });
        return o;
    }());
    $.__views.discard_btn.add($.__views.button_container);
    handleBtnTouchStart ? $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.icon_container = Ti.UI.createView({
        width: "20%",
        height: "100%",
        id: "icon_container"
    });
    $.__views.button_container.add($.__views.icon_container);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.icon_container.add($.__views.icon);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: 1,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.10)",
        id: "__alloyId5"
    });
    $.__views.button_container.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            left: 10
        });
        Alloy.isTablet && _.extend(o, {
            height: 68
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 53
        });
        _.extend(o, {
            id: "__alloyId6"
        });
        return o;
    }());
    $.__views.button_container.add($.__views.__alloyId6);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            top: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
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
    $.__views.__alloyId6.add($.__views.title);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "#666666",
            left: 0,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 16,
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
    $.__views.__alloyId6.add($.__views.description);
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
    var colors = args.colors || "#760505,#910606";
    colors = colors.split(",");
    $.icon_container.backgroundColor = colors[0];
    $.button_container.backgroundColor = colors[1];
    var textColor = args.textColor || "#fff,#fff";
    textColor = textColor.split(",");
    $.title.color = textColor[0];
    $.description.color = textColor[1];
    __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] && $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] && $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] && $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] && $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
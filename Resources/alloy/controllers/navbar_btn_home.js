function Controller() {
    function handleBtnTouchStart() {
        $.navbar_btn.backgroundColor = "#dadada";
    }
    function handleBtnTouchEnd(e) {
        if (move) move = false; else {
            $.navbar_btn.backgroundColor = "transparent";
            $.trigger("click", e);
        }
    }
    function handleBtnTouchCancel() {
        $.navbar_btn.backgroundColor = "transparent";
    }
    function handleBtnTouchMove() {
        $.navbar_btn.backgroundColor = "transparent";
        move = true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "navbar_btn_home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: "100%"
        });
        Alloy.isHandheld && _.extend(o, {
            width: "19.0625%"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "12.272727272727%"
        });
        _.extend(o, {
            id: "btn"
        });
        return o;
    }());
    $.__views.btn && $.addTopLevelView($.__views.btn);
    $.__views.divider = Ti.UI.createView({
        width: 2,
        height: "100%",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ "#dcdcdc", "#fcfcfc" ]
        },
        id: "divider"
    });
    $.__views.btn.add($.__views.divider);
    $.__views.navbar_btn = Ti.UI.createView({
        height: "100%",
        id: "navbar_btn"
    });
    $.__views.btn.add($.__views.navbar_btn);
    handleBtnTouchStart ? $.__views.navbar_btn.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.navbar_btn!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.navbar_btn.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.navbar_btn!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.navbar_btn.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.navbar_btn!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.navbar_btn.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.navbar_btn!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.__alloyId42 = Ti.UI.createView({
        id: "__alloyId42"
    });
    $.__views.navbar_btn.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 35
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 60
        });
        _.extend(o, {
            id: "__alloyId43"
        });
        return o;
    }());
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.image_view = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {
            top: 0
        });
        Alloy.isHandheld && _.extend(o, {
            height: 20
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 40,
            width: 30
        });
        _.extend(o, {
            id: "image_view"
        });
        return o;
    }());
    $.__views.__alloyId43.add($.__views.image_view);
    $.__views.label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: "auto",
            height: "auto",
            color: "#000",
            touchEnabled: false
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 19
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 10,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 19
        });
        _.extend(o, {
            bottom: 0,
            id: "label"
        });
        return o;
    }());
    $.__views.__alloyId43.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var formFactor = "handheld";
    var move = false;
    Alloy.isTablet && (formFactor = "tablet");
    $.image_view.image = "/images/" + args.image + "-" + formFactor + ".png";
    $.label.text = args.text;
    if ("left" == args.position) {
        $.btn.left = 0;
        $.divider.right = 0;
    } else {
        $.btn.right = 0;
        $.divider.left = 0;
    }
    __defers["$.__views.navbar_btn!touchstart!handleBtnTouchStart"] && $.__views.navbar_btn.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.navbar_btn!touchend!handleBtnTouchEnd"] && $.__views.navbar_btn.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.navbar_btn!touchmove!handleBtnTouchMove"] && $.__views.navbar_btn.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.navbar_btn!touchcancel!handleBtnTouchCancel"] && $.__views.navbar_btn.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
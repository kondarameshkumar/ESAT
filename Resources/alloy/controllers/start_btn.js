function Controller() {
    function handleBtnTouchStart() {
        $.button_container.backgroundGradient = {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ "rgba(0,0,0,0.20)", "rgba(250,250,250,0.20)" ]
        };
    }
    function unselectedState() {
        $.button_container.backgroundGradient = {
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
        };
    }
    function handleBtnTouchEnd(e) {
        if (move) move = false; else {
            unselectedState();
            $.trigger("click", e);
        }
    }
    function handleBtnTouchMove() {
        unselectedState();
        move = true;
    }
    function handleBtnTouchCancel() {
        unselectedState();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "start_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            backgroundColor: "white",
            top: 10,
            left: 10,
            right: 10,
            height: 55
        });
        Alloy.isTablet && _.extend(o, {
            backgroundColor: "#eeeeee",
            top: 50,
            left: 10,
            right: 10,
            height: 100
        });
        _.extend(o, {
            id: "container"
        });
        return o;
    }());
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.button_container = Ti.UI.createView({
        id: "button_container"
    });
    $.__views.container.add($.__views.button_container);
    handleBtnTouchStart ? $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            color: "#fff",
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            height: Ti.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            color: "#fff",
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            height: Ti.UI.SIZE
        });
        _.extend(o, {
            id: "title"
        });
        return o;
    }());
    $.__views.button_container.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var move = false;
    var formFactor = "handheld";
    if (Alloy.isTablet) {
        1 == args.order ? $.button_container.left = 0 : $.button_container.right = 0;
        formFactor = "tablet";
    } else 1 == args.order ? $.button_container.top = 0 : $.button_container.bottom = 0;
    $.button_container.backgroundColor = args.color;
    $.button_container.borderColor = args.borderColor;
    $.button_container.borderWidth = 1;
    $.button_container.borderRadius = 10;
    $.title.text = args.title;
    __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] && $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] && $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] && $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] && $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
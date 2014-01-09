function Controller() {
    function handleBtnTouchStart() {
        $.btn.backgroundImage = "/images/exit.png";
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
    function unselectedState() {
        $.btn.backgroundImage = "/images/exit.png";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "exit_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 60,
            width: 110,
            left: 5,
            backgroundImage: "/images/exit.png"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 40,
            width: 65,
            left: 5,
            backgroundImage: "/images/exit.png"
        });
        _.extend(o, {
            id: "btn"
        });
        return o;
    }());
    $.__views.btn && $.addTopLevelView($.__views.btn);
    handleBtnTouchStart ? $.__views.btn.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.btn!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.btn.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.btn!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.btn.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.btn!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.btn.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.btn!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.done_label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        _.extend(o, {
            text: "Exit",
            id: "done_label"
        });
        return o;
    }());
    $.__views.btn.add($.__views.done_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var move = false;
    __defers["$.__views.btn!touchstart!handleBtnTouchStart"] && $.__views.btn.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.btn!touchend!handleBtnTouchEnd"] && $.__views.btn.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.btn!touchmove!handleBtnTouchMove"] && $.__views.btn.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.btn!touchcancel!handleBtnTouchCancel"] && $.__views.btn.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
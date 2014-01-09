function Controller() {
    function handleBtnTouchStart() {
        $.btn1.backgroundImage = "/images/back-settings.png";
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
        $.btn1.backgroundImage = "/images/back-settings.png";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "questions_packs_back_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.btn1 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 41,
            width: 80,
            left: 5,
            backgroundImage: "/images/back-settings.png"
        });
        Alloy.isTablet && _.extend(o, {
            height: 55,
            width: 200,
            left: 5,
            backgroundImage: "/images/back-settings.png"
        });
        _.extend(o, {
            id: "btn1"
        });
        return o;
    }());
    $.__views.btn1 && $.addTopLevelView($.__views.btn1);
    handleBtnTouchStart ? $.__views.btn1.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.btn1!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.btn1.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.btn1!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.btn1.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.btn1!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.btn1.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.btn1!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.done_label1 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
        });
        _.extend(o, {
            text: "Question Packs",
            id: "done_label1"
        });
        return o;
    }());
    $.__views.btn1.add($.__views.done_label1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var move = false;
    __defers["$.__views.btn1!touchstart!handleBtnTouchStart"] && $.__views.btn1.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.btn1!touchend!handleBtnTouchEnd"] && $.__views.btn1.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.btn1!touchmove!handleBtnTouchMove"] && $.__views.btn1.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.btn1!touchcancel!handleBtnTouchCancel"] && $.__views.btn1.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
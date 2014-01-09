function Controller() {
    function handleBtnTouchStart() {
        $.button_container.backgroundColor = "#dadada";
        $.icon_container.backgroundColor = "#d5d5d5";
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
        $.button_container.backgroundColor = "#fafafa";
        $.icon_container.backgroundColor = "#f5f5f5";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about_list_btn";
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
            height: 55
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 55
        });
        _.extend(o, {
            id: "btn"
        });
        return o;
    }());
    $.__views.btn && $.addTopLevelView($.__views.btn);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal",
            backgroundColor: "#fafafa"
        });
        Alloy.isTablet && _.extend(o, {
            height: "100%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "100%"
        });
        _.extend(o, {
            id: "button_container"
        });
        return o;
    }());
    $.__views.btn.add($.__views.button_container);
    handleBtnTouchStart ? $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.icon_container = Ti.UI.createView({
        backgroundColor: "#f5f5f5",
        width: 60,
        height: "100%",
        top: 0,
        id: "icon_container"
    });
    $.__views.button_container.add($.__views.icon_container);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.icon_container.add($.__views.icon);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: 1,
        top: 0,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.10)",
        id: "__alloyId2"
    });
    $.__views.button_container.add($.__views.__alloyId2);
    $.__views.title = Ti.UI.createLabel({
        left: 10,
        height: 55,
        font: {
            fontSize: 20,
            fontFamily: "AvenirLTStd-Black"
        },
        id: "title"
    });
    $.__views.button_container.add($.__views.title);
    $.__views.arrow = Ti.UI.createImageView({
        right: 10,
        id: "arrow",
        image: "/images/arrow.png"
    });
    $.__views.btn.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var move = false;
    var formFactor = "handheld";
    Alloy.isTablet && (formFactor = "tablet");
    $.icon.image = "/images/" + args.image + "-" + formFactor + ".png";
    $.title.text = args.text;
    __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] && $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] && $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] && $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] && $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
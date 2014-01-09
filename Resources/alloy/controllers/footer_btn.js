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
    this.__controllerPath = "footer_btn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: "50%"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: "50%"
        });
        _.extend(o, {
            id: "container"
        });
        return o;
    }());
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "horizontal",
            borderRadius: 5,
            backgroundGradient: {
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
            }
        });
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            height: "90.9%"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            top: 20,
            bottom: 10
        });
        _.extend(o, {
            id: "button_container"
        });
        return o;
    }());
    $.__views.container.add($.__views.button_container);
    handleBtnTouchStart ? $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart) : __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] = true;
    handleBtnTouchEnd ? $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd) : __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] = true;
    handleBtnTouchMove ? $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove) : __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] = true;
    handleBtnTouchCancel ? $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel) : __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
        width: "13.3%",
        height: "100%",
        id: "__alloyId24"
    });
    $.__views.button_container.add($.__views.__alloyId24);
    $.__views.icon = Ti.UI.createImageView({
        id: "icon"
    });
    $.__views.__alloyId24.add($.__views.icon);
    $.__views.__alloyId25 = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            height: 30
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            height: 50
        });
        _.extend(o, {
            id: "__alloyId25"
        });
        return o;
    }());
    $.__views.button_container.add($.__views.__alloyId25);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            top: 0,
            color: "#fff",
            font: {
                fontSize: 15,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 16
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            top: 0,
            color: "#fff",
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 26,
            bottom: 25
        });
        _.extend(o, {
            id: "title"
        });
        return o;
    }());
    $.__views.__alloyId25.add($.__views.title);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            bottom: 0,
            color: "rgba(250,250,250,0.75)",
            font: {
                fontSize: 10,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 11
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            bottom: 0,
            color: "rgba(250,250,250,0.75)",
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Black"
            },
            height: 23
        });
        _.extend(o, {
            id: "description"
        });
        return o;
    }());
    $.__views.__alloyId25.add($.__views.description);
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
    $.icon.image = args.image;
    $.title.text = args.title;
    $.description.text = args.description;
    exports.setDescription = function(value) {
        $.description.text = value;
    };
    __defers["$.__views.button_container!touchstart!handleBtnTouchStart"] && $.__views.button_container.addEventListener("touchstart", handleBtnTouchStart);
    __defers["$.__views.button_container!touchend!handleBtnTouchEnd"] && $.__views.button_container.addEventListener("touchend", handleBtnTouchEnd);
    __defers["$.__views.button_container!touchmove!handleBtnTouchMove"] && $.__views.button_container.addEventListener("touchmove", handleBtnTouchMove);
    __defers["$.__views.button_container!touchcancel!handleBtnTouchCancel"] && $.__views.button_container.addEventListener("touchcancel", handleBtnTouchCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_half_length";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container_view = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "49.9%",
            height: 69
        });
        _.extend(o, {
            id: "container_view"
        });
        return o;
    }());
    $.__views.container_view && $.addTopLevelView($.__views.container_view);
    $.__views.block_label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 10,
            top: 10,
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#888888"
        });
        _.extend(o, {
            id: "block_label"
        });
        return o;
    }());
    $.__views.container_view.add($.__views.block_label);
    $.__views.title_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 10,
            top: 27,
            heigth: 32
        });
        _.extend(o, {
            id: "title_container"
        });
        return o;
    }());
    $.__views.container_view.add($.__views.title_container);
    $.__views.title_label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            width: 200,
            left: 0,
            top: 0
        });
        _.extend(o, {
            id: "title_label"
        });
        return o;
    }());
    $.__views.title_container.add($.__views.title_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title_label.text = args.title;
    $.block_label.text = args.block;
    var buy_btn = Alloy.createController("buy_btn", args);
    var buy_btn_view = buy_btn.getView();
    buy_btn_view.addEventListener("click", function(e) {
        void 0 != e.productid && $.trigger("click", e);
    });
    exports.markProductAsPurchased = function() {
        buy_btn.markProductAsPurchased();
    };
    $.container_view.add(buy_btn_view);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
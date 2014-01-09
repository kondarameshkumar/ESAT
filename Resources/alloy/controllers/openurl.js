function Controller() {
    function closeModal() {
        $.win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "openurl";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "100%",
            height: "100%",
            borderRadius: 5,
            backgroundColor: "white"
        });
        _.extend(o, {
            id: "win",
            navBarHidden: "true",
            backgroundColor: "black"
        });
        return o;
    }());
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical",
        backgroundColor: "white"
    });
    $.__views.win.add($.__views.vertical);
    $.__views.__alloyId44 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId44"
    });
    $.__views.header = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: 0,
            backgroundColor: "#1b4fb4"
        });
        Alloy.isTablet && _.extend(o, {
            height: 60
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 45
        });
        _.extend(o, {
            id: "header"
        });
        return o;
    }());
    $.__views.__alloyId44.add($.__views.header);
    $.__views.settings_back_btn = Alloy.createController("store_back_btn", {
        id: "settings_back_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.settings_back_btn.setParent($.__views.header);
    closeModal ? $.__views.settings_back_btn.on("click", closeModal) : __defers["$.__views.settings_back_btn!click!closeModal"] = true;
    $.__views.webview = Ti.UI.createWebView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            top: 45,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            top: 60,
            width: "100%",
            height: "90%",
            bottom: 0
        });
        _.extend(o, {
            id: "webview"
        });
        return o;
    }());
    $.__views.__alloyId44.add($.__views.webview);
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId44,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var urlvalue = arguments[0];
    $.webview.url = urlvalue;
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function handleTableViewClick(e) {
        Ti.API.debug("handleTableViewClick");
        0 == e.index ? new_window = Alloy.createController("questions_packs").getView() : 1 == e.index && (new_window = Alloy.createController("study_material").getView());
        new_window.addEventListener("removeClose", removeClose);
        $.navgroup.open(new_window);
    }
    function removeClose() {
        $.navgroup.close(new_window);
        new_window.removeEventListener("removeClose", removeClose);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "store";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.store = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            backgroundImage: "/images/pattern.png",
            backgroundRepeat: true
        });
        _.extend(o, {
            backgroundColor: "black",
            id: "store"
        });
        return o;
    }());
    $.__views.store && $.addTopLevelView($.__views.store);
    $.__views.overlay = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            backgroundColor: "black",
            opacity: .47
        });
        _.extend(o, {
            id: "overlay"
        });
        return o;
    }());
    $.__views.store.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "85%",
            height: "90%",
            borderRadius: 5,
            backgroundColor: "#eeeeee",
            layout: "vertical"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            top: 20,
            backgroundColor: "#f1f1f1"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.store.add($.__views.modal);
    $.__views.__alloyId257 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId257"
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
    $.__views.__alloyId257.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 35,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 21,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {
            text: "Store",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.done_btn = Alloy.createController("done_btn", {
        id: "done_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.done_btn.setParent($.__views.header);
    closeModal ? $.__views.done_btn.on("click", closeModal) : __defers["$.__views.done_btn!click!closeModal"] = true;
    $.__views.content_h = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            height: "89.8%",
            top: 45
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            height: "89.8%",
            top: 60,
            borderRadius: 15
        });
        _.extend(o, {
            id: "content_h"
        });
        return o;
    }());
    $.__views.__alloyId257.add($.__views.content_h);
    $.__views.__alloyId259 = Ti.UI.createTableViewSection({
        id: "__alloyId259"
    });
    var __alloyId260 = [];
    __alloyId260.push($.__views.__alloyId259);
    $.__views.__alloyId261 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 220
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 112
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId261"
        });
        return o;
    }());
    $.__views.__alloyId259.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "50",
        bottom: "0",
        backgroundColor: "#f5f5f5",
        id: "__alloyId263"
    });
    $.__views.__alloyId261.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        top: "10",
        left: "0",
        bottom: "10",
        width: "60",
        backgroundColor: "#f5f5f5",
        id: "__alloyId264"
    });
    $.__views.__alloyId261.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createView({
        top: "71",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId265"
    });
    $.__views.__alloyId261.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "60",
        height: "100%",
        left: "0",
        id: "__alloyId266"
    });
    $.__views.__alloyId261.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 50,
            width: 40
        });
        _.extend(o, {
            image: "/images/icon-categories.png",
            id: "__alloyId267"
        });
        return o;
    }());
    $.__views.__alloyId266.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        left: "70",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId268"
    });
    $.__views.__alloyId261.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Question Packs",
            id: "__alloyId270"
        });
        return o;
    }());
    $.__views.__alloyId269.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Purchase additional subject matter blocks for more effective exams.",
            left: "0",
            right: "40",
            id: "__alloyId271"
        });
        return o;
    }());
    $.__views.__alloyId269.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createTableViewSection({
        id: "__alloyId272"
    });
    __alloyId260.push($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 220
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId273"
        });
        return o;
    }());
    $.__views.__alloyId272.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "50",
        bottom: "0",
        backgroundColor: "#f5f5f5",
        id: "__alloyId275"
    });
    $.__views.__alloyId273.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createView({
        top: "10",
        left: "0",
        bottom: "10",
        width: "60",
        backgroundColor: "#f5f5f5",
        id: "__alloyId276"
    });
    $.__views.__alloyId273.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createView({
        top: "71",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId277"
    });
    $.__views.__alloyId273.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "60",
        height: "100%",
        left: "0",
        id: "__alloyId278"
    });
    $.__views.__alloyId273.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 50,
            width: 40
        });
        _.extend(o, {
            image: "/images/icon-book-black.png",
            id: "__alloyId279"
        });
        return o;
    }());
    $.__views.__alloyId278.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createView({
        left: "70",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId280"
    });
    $.__views.__alloyId273.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Other study material",
            id: "__alloyId282"
        });
        return o;
    }());
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 12,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Order guides and reference materials from our website.",
            left: "0",
            right: "40",
            id: "__alloyId283"
        });
        return o;
    }());
    $.__views.__alloyId281.add($.__views.__alloyId283);
    $.__views.__alloyId258 = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 264
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 500,
            width: 450
        });
        _.extend(o, {
            data: __alloyId260,
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false",
            id: "__alloyId258"
        });
        return o;
    }());
    $.__views.content_h.add($.__views.__alloyId258);
    handleTableViewClick ? $.__views.__alloyId258.addEventListener("click", handleTableViewClick) : __defers["$.__views.__alloyId258!click!handleTableViewClick"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId257,
        id: "navgroup"
    });
    $.__views.modal.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_window;
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    __defers["$.__views.__alloyId258!click!handleTableViewClick"] && $.__views.__alloyId258.addEventListener("click", handleTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
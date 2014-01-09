function Controller() {
    function closeModal(e) {
        $.win.fireEvent("removeClose", e);
    }
    function handleTableViewClick(e) {
        var url = "";
        0 == e.index ? url = "http://shop.csa.ca/invt/27034302012?source=esat-ios" : 1 == e.index ? url = "http://shop.csa.ca/invt/27034292012?source=esat-ios" : 2 == e.index ? url = "http://shop.csa.ca/invt/27013892012?source=esat-ios" : 3 == e.index && (url = "http://shop.csa.ca/invt/27014902012?source=esat-ios");
        new_window = Alloy.createController("openurl", url).getView();
        $.navgroup.open(new_window);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "study_material";
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
    $.__views.__alloyId284 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId284"
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
    $.__views.__alloyId284.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 30,
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
            text: "Study Material",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.settings_back_btn = Alloy.createController("store_back_btn", {
        id: "settings_back_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.settings_back_btn.setParent($.__views.header);
    closeModal ? $.__views.settings_back_btn.on("click", closeModal) : __defers["$.__views.settings_back_btn!click!closeModal"] = true;
    $.__views.scrollView = Ti.UI.createScrollView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            top: 45,
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            top: 80,
            width: "100%",
            height: "90%",
            bottom: 0
        });
        _.extend(o, {
            id: "scrollView",
            showVerticalScrollIndicator: "true"
        });
        return o;
    }());
    $.__views.__alloyId284.add($.__views.scrollView);
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 30,
            right: 10,
            top: 35
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 1,
            right: 10,
            top: 35
        });
        _.extend(o, {
            text: "Helpful resources from CSA Group",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 80
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "true",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    var __alloyId285 = [];
    __alloyId285.push($.__views.tablerowheight);
    $.__views.__alloyId286 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId286"
    });
    $.__views.tablerowheight.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId287"
    });
    $.__views.__alloyId286.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Study Guides",
            id: "__alloyId288"
        });
        return o;
    }());
    $.__views.__alloyId287.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Hard copy guides to help you prepare for your C of Q",
            id: "__alloyId289"
        });
        return o;
    }());
    $.__views.__alloyId287.add($.__views.__alloyId289);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 80
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "true",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    __alloyId285.push($.__views.tablerowheight);
    $.__views.__alloyId290 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId290"
    });
    $.__views.tablerowheight.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Electrical Quick Reference",
            id: "__alloyId292"
        });
        return o;
    }());
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Commonly used terms, rules, installation practices and calculations",
            id: "__alloyId293"
        });
        return o;
    }());
    $.__views.__alloyId291.add($.__views.__alloyId293);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 80
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "true",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    __alloyId285.push($.__views.tablerowheight);
    $.__views.__alloyId294 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId294"
    });
    $.__views.tablerowheight.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Electrical Code",
            id: "__alloyId296"
        });
        return o;
    }());
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Canadian electrical code, part I (22nd edition), safety standard for electrical installations",
            id: "__alloyId297"
        });
        return o;
    }());
    $.__views.__alloyId295.add($.__views.__alloyId297);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 80
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "true",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    __alloyId285.push($.__views.tablerowheight);
    $.__views.__alloyId298 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId298"
    });
    $.__views.tablerowheight.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "CE Code Handbook",
            id: "__alloyId300"
        });
        return o;
    }());
    $.__views.__alloyId299.add($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            right: 20,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "CE code handbook, an explanation of rules of the canadian electrical code, part 1",
            id: "__alloyId301"
        });
        return o;
    }());
    $.__views.__alloyId299.add($.__views.__alloyId301);
    $.__views.tv = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            height: 420
        });
        Alloy.isTablet && _.extend(o, {
            height: "100%",
            width: "90%",
            top: 10
        });
        _.extend(o, {
            data: __alloyId285,
            id: "tv",
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.tv);
    handleTableViewClick ? $.__views.tv.addEventListener("click", handleTableViewClick) : __defers["$.__views.tv!click!handleTableViewClick"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId284,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    __defers["$.__views.tv!click!handleTableViewClick"] && $.__views.tv.addEventListener("click", handleTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
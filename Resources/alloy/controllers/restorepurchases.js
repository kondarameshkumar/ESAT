function Controller() {
    function closeModal() {
        $.win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "restorepurchases";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        navBarHidden: "true"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical"
    });
    $.__views.win.add($.__views.vertical);
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
    $.__views.vertical.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 21,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 35,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {
            text: "Restore Purchases",
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
    $.__views.vertical.add($.__views.scrollView);
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 18,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 40,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        _.extend(o, {
            text: "Purchased Items List :",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.horizontal = Ti.UI.createView({
        id: "horizontal"
    });
    $.__views.scrollView.add($.__views.horizontal);
    $.__views.__alloyId193 = Ti.UI.createTableViewSection({
        id: "__alloyId193"
    });
    var __alloyId194 = [];
    __alloyId194.push($.__views.__alloyId193);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId195 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId195"
    });
    $.__views.tablerowheight.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Full Set",
            id: "__alloyId197"
        });
        return o;
    }());
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId198 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId198"
    });
    $.__views.tablerowheight.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block A",
            id: "__alloyId200"
        });
        return o;
    }());
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId201 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId201"
    });
    $.__views.tablerowheight.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block B",
            id: "__alloyId203"
        });
        return o;
    }());
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId204 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId204"
    });
    $.__views.tablerowheight.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block C",
            id: "__alloyId206"
        });
        return o;
    }());
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId207 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId207"
    });
    $.__views.tablerowheight.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId208"
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block D",
            id: "__alloyId209"
        });
        return o;
    }());
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId210 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId210"
    });
    $.__views.tablerowheight.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block E",
            id: "__alloyId212"
        });
        return o;
    }());
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 80
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId193.add($.__views.tablerowheight);
    $.__views.__alloyId213 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId213"
    });
    $.__views.tablerowheight.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Block F",
            id: "__alloyId215"
        });
        return o;
    }());
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.tv = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            height: 480
        });
        Alloy.isTablet && _.extend(o, {
            height: 1e3,
            width: 600,
            borderRadius: 5
        });
        _.extend(o, {
            data: __alloyId194,
            id: "tv",
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.tv);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var formFactor = "handheld";
    Alloy.isTablet && (formFactor = "tablet");
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
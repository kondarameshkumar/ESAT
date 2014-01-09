function Controller() {
    function closeModal() {
        $.modal.close();
    }
    function handleTableViewClick(e) {
        Ti.API.debug("handleTableViewClick");
        if (0 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockA").getView();
            $.navgroup.open(new_window);
        }
        if (1 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockB").getView();
            $.navgroup.open(new_window);
        }
        if (2 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockC").getView();
            $.navgroup.open(new_window);
        }
        if (3 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockD").getView();
            $.navgroup.open(new_window);
        }
        if (4 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockE").getView();
            $.navgroup.open(new_window);
        }
        if (5 == e.index) {
            new_window = Alloy.createController("questions_packs_BlockF").getView();
            $.navgroup.open(new_window);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "questions_packs_FullSet";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.modal = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "100%",
            height: "100%",
            top: 0,
            borderRadius: 5,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "#f1f1f1"
        });
        _.extend(o, {
            id: "modal",
            navBarHidden: "true",
            backgroundColor: "black"
        });
        return o;
    }());
    $.__views.modal && $.addTopLevelView($.__views.modal);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical",
        backgroundColor: "white"
    });
    $.__views.modal.add($.__views.vertical);
    $.__views.__alloyId166 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId166"
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
    $.__views.__alloyId166.add($.__views.header);
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
            text: "Full Set",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.settings_back_btn = Alloy.createController("questions_packs_back_btn", {
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
    $.__views.__alloyId166.add($.__views.scrollView);
    $.__views.__alloyId167 = Ti.UI.createTableViewSection({
        id: "__alloyId167"
    });
    var __alloyId168 = [];
    __alloyId168.push($.__views.__alloyId167);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId169 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId169"
    });
    $.__views.tablerowheight.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId170"
    });
    $.__views.__alloyId169.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel(function() {
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
            id: "__alloyId171"
        });
        return o;
    }());
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Occupational Skills",
            id: "__alloyId172"
        });
        return o;
    }());
    $.__views.__alloyId170.add($.__views.__alloyId172);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId173 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId173"
    });
    $.__views.tablerowheight.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel(function() {
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
            id: "__alloyId175"
        });
        return o;
    }());
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Systems, Distribution\nand Services",
            id: "__alloyId176"
        });
        return o;
    }());
    $.__views.__alloyId174.add($.__views.__alloyId176);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId177 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId177"
    });
    $.__views.tablerowheight.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel(function() {
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
            id: "__alloyId179"
        });
        return o;
    }());
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Wiring Methods",
            id: "__alloyId180"
        });
        return o;
    }());
    $.__views.__alloyId178.add($.__views.__alloyId180);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId181 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId181"
    });
    $.__views.tablerowheight.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel(function() {
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
            id: "__alloyId183"
        });
        return o;
    }());
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Motors and Control\nSystems",
            id: "__alloyId184"
        });
        return o;
    }());
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId185 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId185"
    });
    $.__views.tablerowheight.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel(function() {
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
            id: "__alloyId187"
        });
        return o;
    }());
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Signalling and\nCommunication Systems",
            id: "__alloyId188"
        });
        return o;
    }());
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.tablerowheight = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 120
        });
        _.extend(o, {
            id: "tablerowheight",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId167.add($.__views.tablerowheight);
    $.__views.__alloyId189 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId189"
    });
    $.__views.tablerowheight.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId190"
    });
    $.__views.__alloyId189.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel(function() {
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
            id: "__alloyId191"
        });
        return o;
    }());
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "Upgrading, Service\nand Maintenance",
            id: "__alloyId192"
        });
        return o;
    }());
    $.__views.__alloyId190.add($.__views.__alloyId192);
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
            data: __alloyId168,
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
        window: $.__views.__alloyId166,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_window;
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    __defers["$.__views.tv!click!handleTableViewClick"] && $.__views.tv.addEventListener("click", handleTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
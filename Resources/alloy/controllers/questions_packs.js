function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function handleTableViewClick(e) {
        Ti.API.debug("handleTableViewClick");
        if (0 == e.index) {
            var new_window = Alloy.createController("questions_packs_FullSet").getView();
            $.navgroup.open(new_window);
        }
    }
    function handleTableViewClick1(e) {
        Ti.API.debug("handleTableViewClick1");
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
    this.__controllerPath = "questions_packs";
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
    $.__views.__alloyId127 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId127"
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
    $.__views.__alloyId127.add($.__views.header);
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
            text: "Question Packs",
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
    $.__views.__alloyId127.add($.__views.scrollView);
    $.__views.__alloyId128 = Ti.UI.createTableViewSection({
        id: "__alloyId128"
    });
    var __alloyId129 = [];
    __alloyId129.push($.__views.__alloyId128);
    $.__views.tablerowheight1 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 92,
            backgroundColor: "white"
        });
        Alloy.isTablet && _.extend(o, {
            height: 200
        });
        _.extend(o, {
            id: "tablerowheight1",
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY
        });
        return o;
    }());
    $.__views.__alloyId128.add($.__views.tablerowheight1);
    $.__views.__alloyId130 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId130"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "50",
        bottom: "0",
        backgroundColor: "#f5f5f5",
        id: "__alloyId131"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        top: "10",
        left: "0",
        bottom: "10",
        width: "60",
        backgroundColor: "#f5f5f5",
        id: "__alloyId132"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        top: "71",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId133"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "60",
        height: "100%",
        left: "0",
        id: "__alloyId134"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            height: 45,
            width: 40
        });
        _.extend(o, {
            image: "/images/icon-star-tablet.png",
            id: "__alloyId135"
        });
        return o;
    }());
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        left: "70",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId136"
    });
    $.__views.tablerowheight1.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel(function() {
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
            id: "__alloyId138"
        });
        return o;
    }());
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel(function() {
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
            text: "All the blocks at a discount",
            left: "0",
            right: "120",
            id: "__alloyId139"
        });
        return o;
    }());
    $.__views.__alloyId137.add($.__views.__alloyId139);
    $.__views.TV1 = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            height: 132
        });
        Alloy.isTablet && _.extend(o, {
            height: 300,
            width: 600,
            top: 20
        });
        _.extend(o, {
            data: __alloyId129,
            id: "TV1",
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.TV1);
    handleTableViewClick ? $.__views.TV1.addEventListener("click", handleTableViewClick) : __defers["$.__views.TV1!click!handleTableViewClick"] = true;
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        _.extend(o, {
            text: "Individual Blocks",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.__alloyId140 = Ti.UI.createTableViewSection({
        id: "__alloyId140"
    });
    var __alloyId141 = [];
    __alloyId141.push($.__views.__alloyId140);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId142 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId142"
    });
    $.__views.tablerowheight.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel(function() {
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
            id: "__alloyId144"
        });
        return o;
    }());
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel(function() {
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
            id: "__alloyId145"
        });
        return o;
    }());
    $.__views.__alloyId143.add($.__views.__alloyId145);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId146 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId146"
    });
    $.__views.tablerowheight.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel(function() {
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
            id: "__alloyId148"
        });
        return o;
    }());
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel(function() {
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
            id: "__alloyId149"
        });
        return o;
    }());
    $.__views.__alloyId147.add($.__views.__alloyId149);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId150 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId150"
    });
    $.__views.tablerowheight.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel(function() {
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
            id: "__alloyId152"
        });
        return o;
    }());
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel(function() {
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
            id: "__alloyId153"
        });
        return o;
    }());
    $.__views.__alloyId151.add($.__views.__alloyId153);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId154 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId154"
    });
    $.__views.tablerowheight.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel(function() {
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
            id: "__alloyId156"
        });
        return o;
    }());
    $.__views.__alloyId155.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel(function() {
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
            id: "__alloyId157"
        });
        return o;
    }());
    $.__views.__alloyId155.add($.__views.__alloyId157);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId158 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId158"
    });
    $.__views.tablerowheight.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel(function() {
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
            id: "__alloyId160"
        });
        return o;
    }());
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel(function() {
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
            id: "__alloyId161"
        });
        return o;
    }());
    $.__views.__alloyId159.add($.__views.__alloyId161);
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
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
        });
        return o;
    }());
    $.__views.__alloyId140.add($.__views.tablerowheight);
    $.__views.__alloyId162 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId162"
    });
    $.__views.tablerowheight.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel(function() {
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
            id: "__alloyId164"
        });
        return o;
    }());
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel(function() {
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
            id: "__alloyId165"
        });
        return o;
    }());
    $.__views.__alloyId163.add($.__views.__alloyId165);
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
            data: __alloyId141,
            id: "tv",
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.tv);
    handleTableViewClick1 ? $.__views.tv.addEventListener("click", handleTableViewClick1) : __defers["$.__views.tv!click!handleTableViewClick1"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId127,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_window;
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    __defers["$.__views.TV1!click!handleTableViewClick"] && $.__views.TV1.addEventListener("click", handleTableViewClick);
    __defers["$.__views.tv!click!handleTableViewClick1"] && $.__views.tv.addEventListener("click", handleTableViewClick1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
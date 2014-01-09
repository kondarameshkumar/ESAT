function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function handleTableViewClick(e) {
        if (1 == Alloy.Globals.purchases[e.index] || 1 == Alloy.Globals.purchases[1]) {
            for (var i = 0; $.tv.data[0].rows.length > i; i++) $.tv.data[0].rows[i].hasCheck = false;
            for (var i = 0; $.tv.data[1].rows.length > i; i++) $.tv.data[1].rows[i].hasCheck = false;
            e.row.hasCheck = true;
            Ti.API.info(" e.index: " + e.index);
            settings.set({
                question_set: e.index
            });
            settings.save();
        } else {
            for (var i = 0; $.tv.data[0].rows.length > i; i++) $.tv.data[0].rows[i].hasCheck = false;
            for (var i = 0; $.tv.data[1].rows.length > i; i++) $.tv.data[1].rows[i].hasCheck = false;
            e.row.hasCheck = true;
            Ti.API.info(" e.index: " + e.index);
            settings.set({
                question_set: e.index
            });
            settings.save();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_select";
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
            height: "90%",
            borderRadius: 5,
            top: 0,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "#f1f1f1"
        });
        _.extend(o, {
            id: "modal",
            navBarHidden: "true"
        });
        return o;
    }());
    $.__views.modal && $.addTopLevelView($.__views.modal);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical"
    });
    $.__views.modal.add($.__views.vertical);
    $.__views.header = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            top: 0,
            backgroundColor: "#1b4fb4"
        });
        Alloy.isTablet && _.extend(o, {
            height: 60,
            backgroundColor: "#1b4fb4"
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
                fontSize: 30,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {
            text: "Question Set",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.settings_back_btn = Alloy.createController("settings_back_btn", {
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
    $.__views.vertical.add($.__views.scrollView);
    $.__views.description = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        _.extend(o, {
            text: "Choose where your questions will come from.\n\nThe starter and full sets have questions from every topic. You can also choose to study just one subject if you’ve purchased it.",
            id: "description"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.description);
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
                fontSize: 25,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        _.extend(o, {
            text: "Question Sets",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.__alloyId218 = Ti.UI.createTableViewSection({
        id: "__alloyId218"
    });
    var __alloyId219 = [];
    __alloyId219.push($.__views.__alloyId218);
    $.__views.__alloyId220 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 100
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId220"
        });
        return o;
    }());
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId222"
    });
    $.__views.__alloyId221.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Starter Set",
            id: "__alloyId223"
        });
        return o;
    }());
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "A sample set from every subject",
            id: "__alloyId224"
        });
        return o;
    }());
    $.__views.__alloyId222.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 60
        });
        Alloy.isTablet && _.extend(o, {
            height: 100
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId225"
        });
        return o;
    }());
    $.__views.__alloyId218.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId228"
        });
        return o;
    }());
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666"
        });
        _.extend(o, {
            text: "All the blocks at a discount",
            id: "__alloyId229"
        });
        return o;
    }());
    $.__views.__alloyId227.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createTableViewSection({
        id: "__alloyId230"
    });
    __alloyId219.push($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId231"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId232"
    });
    $.__views.__alloyId231.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId234"
        });
        return o;
    }());
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId235"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId236"
    });
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId238"
        });
        return o;
    }());
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId239"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId242"
        });
        return o;
    }());
    $.__views.__alloyId241.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId243"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId244"
    });
    $.__views.__alloyId243.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId245"
    });
    $.__views.__alloyId244.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId246"
        });
        return o;
    }());
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId247"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId248"
    });
    $.__views.__alloyId247.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId250"
        });
        return o;
    }());
    $.__views.__alloyId249.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 45
        });
        Alloy.isTablet && _.extend(o, {
            height: 90
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId251"
        });
        return o;
    }());
    $.__views.__alloyId230.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 16,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
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
            id: "__alloyId254"
        });
        return o;
    }());
    $.__views.__alloyId253.add($.__views.__alloyId254);
    $.__views.tv = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            height: 460
        });
        Alloy.isTablet && _.extend(o, {
            height: 800,
            width: 600
        });
        _.extend(o, {
            data: __alloyId219,
            id: "tv",
            style: Ti.UI.iPhone.TableViewStyle.GROUPED,
            backgroundColor: "transparent",
            scrollable: "false"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.tv);
    handleTableViewClick ? $.__views.tv.addEventListener("click", handleTableViewClick) : __defers["$.__views.tv!click!handleTableViewClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var settings = Alloy.Models.settings;
    2 > settings.toJSON().question_set ? $.tv.data[0].rows[settings.toJSON().question_set].hasCheck = true : $.tv.data[1].rows[Number(settings.toJSON().question_set) - 2].hasCheck = true;
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    __defers["$.__views.tv!click!handleTableViewClick"] && $.__views.tv.addEventListener("click", handleTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    function closeModal(e) {
        $.win.fireEvent("removeClose", e);
    }
    function handleTableViewClick(e) {
        for (var i = 0; $.tv.data[0].rows.length > i; i++) $.tv.data[0].rows[i].hasCheck = false;
        e.row.hasCheck = true;
        settings.set({
            timer: e.index + 3
        });
        settings.save();
        var exams = Alloy.Collections.exams;
        var exam = exams.at(exams.length - 1);
        var timeLeft = 60 * 60 * (e.index + 3);
        exam.set({
            time: timeLeft
        });
        exam.save();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "practice_timer";
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
        layout: "vertical",
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
            height: "13%"
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
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: 21,
            fontFamily: "AvenirLTStd-Medium"
        },
        color: "#fff",
        text: "Practice Timer",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.settings_back_btn = Alloy.createController("settings_back_btn", {
        id: "settings_back_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.settings_back_btn.setParent($.__views.header);
    closeModal ? $.__views.settings_back_btn.on("click", closeModal) : __defers["$.__views.settings_back_btn!click!closeModal"] = true;
    $.__views.description = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#222222",
        left: 10,
        right: 10,
        top: 10,
        text: "The timer is adjustable to simulate special needs cases.",
        id: "description"
    });
    $.__views.vertical.add($.__views.description);
    $.__views.page_title = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        left: 10,
        right: 10,
        top: 10,
        text: "Timer Settings",
        id: "page_title"
    });
    $.__views.vertical.add($.__views.page_title);
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        height: "60",
        touchEnabled: "false",
        backgroundColor: "white",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId70"
    });
    var __alloyId71 = [];
    __alloyId71.push($.__views.__alloyId70);
    $.__views.__alloyId72 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "3 hours",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#666666",
        text: "Standard exam length",
        id: "__alloyId75"
    });
    $.__views.__alloyId73.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createTableViewRow({
        height: "45",
        touchEnabled: "false",
        backgroundColor: "white",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId76"
    });
    __alloyId71.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "4 hours",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        height: "45",
        touchEnabled: "false",
        backgroundColor: "white",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId80"
    });
    __alloyId71.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "5 hours",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        height: "45",
        touchEnabled: "false",
        backgroundColor: "white",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId84"
    });
    __alloyId71.push($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        left: "10",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "6 hours",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.tv = Ti.UI.createTableView({
        data: __alloyId71,
        id: "tv",
        height: "235",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        scrollable: "false"
    });
    $.__views.vertical.add($.__views.tv);
    handleTableViewClick ? $.__views.tv.addEventListener("click", handleTableViewClick) : __defers["$.__views.tv!click!handleTableViewClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var settings = Alloy.Models.settings;
    $.tv.data[0].rows[settings.toJSON().timer - 3].hasCheck = true;
    __defers["$.__views.settings_back_btn!click!closeModal"] && $.__views.settings_back_btn.on("click", closeModal);
    __defers["$.__views.tv!click!handleTableViewClick"] && $.__views.tv.addEventListener("click", handleTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
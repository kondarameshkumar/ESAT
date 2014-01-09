function Controller() {
    function fireSetEvent() {}
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function start() {
        $.modal.fireEvent("removeClose", {
            start: 2
        });
    }
    function handleTableViewClick(e) {
        if (1 == e.index) {
            new_window = Alloy.createController("practice_timer").getView();
            new_window.addEventListener("removeClose", removeClose);
            Alloy.isTablet || $.navgroup.open(new_window);
        }
    }
    function removeClose() {
        Alloy.isTablet || $.navgroup.close(new_window);
        new_window.removeEventListener("removeClose", removeClose);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "practice_settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.practice_settings = Ti.UI.createView({
        id: "practice_settings"
    });
    $.__views.practice_settings && $.addTopLevelView($.__views.practice_settings);
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
    $.__views.practice_settings.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "70.3%",
            height: "48%",
            borderRadius: 5,
            backgroundColor: "white"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "#f1f1f1"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.practice_settings.add($.__views.modal);
    $.__views.__alloyId48 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId48"
    });
    fireSetEvent ? $.__views.__alloyId48.addEventListener("open", fireSetEvent) : __defers["$.__views.__alloyId48!open!fireSetEvent"] = true;
    $.__views.vertical = Ti.UI.createView({
        layout: "vertical",
        id: "vertical"
    });
    $.__views.__alloyId48.add($.__views.vertical);
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
        text: "Practice Settings",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.cancel_btn = Alloy.createController("cancel_btn", {
        id: "cancel_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.cancel_btn.setParent($.__views.header);
    closeModal ? $.__views.cancel_btn.on("click", closeModal) : __defers["$.__views.cancel_btn!click!closeModal"] = true;
    $.__views.description = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#222222",
        left: 10,
        right: 10,
        top: 10,
        text: "Practice Mode simulates an actual exam. This will provide 100 random questions from all available blocks, and defaults to a 3 hour timer.\n\nThe timer is adjustable to simulate special needs cases.",
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
        text: "Practice Settings",
        id: "page_title"
    });
    $.__views.vertical.add($.__views.page_title);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: "70",
        touchEnabled: "false",
        backgroundColor: "white",
        hasChild: "false",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId50"
    });
    var __alloyId51 = [];
    __alloyId51.push($.__views.__alloyId50);
    $.__views.__alloyId52 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "10",
        backgroundColor: "#f5f5f5",
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "40",
        height: "69",
        backgroundColor: "#f5f5f5",
        id: "__alloyId53"
    });
    $.__views.__alloyId50.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        top: "10",
        left: "0",
        height: "59",
        width: "50",
        backgroundColor: "#f5f5f5",
        id: "__alloyId54"
    });
    $.__views.__alloyId50.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "50",
        height: "100%",
        left: "0",
        id: "__alloyId55"
    });
    $.__views.__alloyId50.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        image: "/images/icon-set.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        left: "60",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId57"
    });
    $.__views.__alloyId50.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "Blocks in use",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.set_text = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#185ae6",
        text: "Starter Set",
        id: "set_text"
    });
    $.__views.__alloyId58.add($.__views.set_text);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: "70",
        touchEnabled: "false",
        backgroundColor: "white",
        hasChild: "true",
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
        id: "__alloyId60"
    });
    __alloyId51.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        top: "49",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "10",
        backgroundColor: "#f5f5f5",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "40",
        height: "69",
        backgroundColor: "#f5f5f5",
        id: "__alloyId62"
    });
    $.__views.__alloyId60.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "59",
        width: "50",
        backgroundColor: "#f5f5f5",
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "50",
        height: "100%",
        left: "0",
        id: "__alloyId64"
    });
    $.__views.__alloyId60.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createImageView({
        image: "/images/icon-clock-handheld.png",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        left: "60",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId66"
    });
    $.__views.__alloyId60.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 16,
            fontFamily: "AvenirLTStd-Black"
        },
        color: "#222222",
        text: "Timer",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.timerText = Ti.UI.createLabel({
        left: 0,
        font: {
            fontSize: 14,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#185ae6",
        id: "timerText"
    });
    $.__views.__alloyId67.add($.__views.timerText);
    $.__views.__alloyId49 = Ti.UI.createTableView({
        data: __alloyId51,
        height: "180",
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        scrollable: "false",
        id: "__alloyId49"
    });
    $.__views.vertical.add($.__views.__alloyId49);
    handleTableViewClick ? $.__views.__alloyId49.addEventListener("click", handleTableViewClick) : __defers["$.__views.__alloyId49!click!handleTableViewClick"] = true;
    $.__views.__alloyId69 = Alloy.createController("start_btn", {
        color: "#348300",
        borderColor: "#205000",
        title: "Start Practice Mode",
        id: "__alloyId69",
        __parentSymbol: $.__views.vertical
    });
    $.__views.__alloyId69.setParent($.__views.vertical);
    start ? $.__views.__alloyId69.on("click", start) : __defers["$.__views.__alloyId69!click!start"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId48,
        id: "navgroup"
    });
    $.__views.modal.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var new_window;
    Alloy.Collections.exams;
    var purchases = Alloy.Collections.purchase;
    var purchaseText = "Starter Set";
    purchases.on("change", function() {
        this.each(function(purchase) {
            var purchaseJSON = purchase.toJSON();
            "Full Set" == purchaseJSON.title && 1 == purchaseJSON.purchased ? purchaseText = "Full Set" : purchaseJSON.purchased && (purchaseText += ", " + purchaseJSON.description.split(" ")[1]);
        });
    });
    purchases.trigger("change");
    var settings = Alloy.Models.settings;
    settings.on("change:timer", function() {
        var transform = this.toJSON();
        transform.timer = transform.timer + " hours";
        $.timerText.text = transform.timer;
    });
    settings.trigger("change:timer");
    $.set_text.text = purchaseText;
    __defers["$.__views.__alloyId48!open!fireSetEvent"] && $.__views.__alloyId48.addEventListener("open", fireSetEvent);
    __defers["$.__views.cancel_btn!click!closeModal"] && $.__views.cancel_btn.on("click", closeModal);
    __defers["$.__views.__alloyId49!click!handleTableViewClick"] && $.__views.__alloyId49.addEventListener("click", handleTableViewClick);
    __defers["$.__views.__alloyId69!click!start"] && $.__views.__alloyId69.on("click", start);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
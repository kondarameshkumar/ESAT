function Controller() {
    function fireSetEvent() {}
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function start() {
        $.modal.fireEvent("removeClose", {
            start: 1
        });
    }
    function outputState() {
        Ti.API.info("Switch value: " + $.basicSwitch.value);
        settings.set({
            instant_feedback: $.basicSwitch.value
        });
        settings.save();
    }
    function handleTableViewClick(e) {
        Ti.API.info("In StartHandelTableViewClick");
        if (1 == e.index) {
            Ti.API.info("In StartHandelTableViewClick");
            new_window = Alloy.createController("set_select").getView();
            Ti.API.info("In StartHandelTableViewClick 2");
            new_window.addEventListener("removeClose", removeClose);
            Ti.API.info("In StartHandelTableViewClick 3");
            $.navgroup.open(new_window);
            Ti.API.info("In StartHandelTableViewClick 4");
        }
    }
    function removeClose() {
        Ti.API.info("In remove close");
        $.navgroup.close(new_window);
        Ti.API.info("In remove close..2");
        new_window.removeEventListener("removeClose", removeClose);
        Ti.API.info("In remove close..3..");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "study_settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.study_settings = Ti.UI.createView({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        id: "study_settings"
    });
    $.__views.study_settings && $.addTopLevelView($.__views.study_settings);
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
    $.__views.study_settings.add($.__views.overlay);
    $.__views.modal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: "85%",
            height: "90%",
            borderRadius: 5,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "#f1f1f1",
            top: 20
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.study_settings.add($.__views.modal);
    $.__views.__alloyId302 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId302"
    });
    fireSetEvent ? $.__views.__alloyId302.addEventListener("open", fireSetEvent) : __defers["$.__views.__alloyId302!open!fireSetEvent"] = true;
    $.__views.vertical = Ti.UI.createView({
        layout: "vertical",
        id: "vertical"
    });
    $.__views.__alloyId302.add($.__views.vertical);
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
                fontSize: 30,
                fontFamily: "AvenirLTStd-Medium"
            },
            color: "#fff"
        });
        _.extend(o, {
            text: "Study Settings",
            id: "title"
        });
        return o;
    }());
    $.__views.header.add($.__views.title);
    $.__views.cancel_btn = Alloy.createController("cancel_btn", {
        id: "cancel_btn",
        __parentSymbol: $.__views.header
    });
    $.__views.cancel_btn.setParent($.__views.header);
    closeModal ? $.__views.cancel_btn.on("click", closeModal) : __defers["$.__views.cancel_btn!click!closeModal"] = true;
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
                fontSize: 28,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#222222",
            left: 10,
            right: 10,
            top: 10
        });
        _.extend(o, {
            text: "Study Mode gives you 30 random questions from your selected question set. You can focus on individual blocks by purchasing their packs.",
            id: "description"
        });
        return o;
    }());
    $.__views.vertical.add($.__views.description);
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
            text: "Study Settings",
            id: "page_title"
        });
        return o;
    }());
    $.__views.vertical.add($.__views.page_title);
    $.__views.__alloyId304 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 70
        });
        Alloy.isTablet && _.extend(o, {
            height: 150
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
            id: "__alloyId304"
        });
        return o;
    }());
    var __alloyId305 = [];
    __alloyId305.push($.__views.__alloyId304);
    $.__views.__alloyId306 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId306"
    });
    $.__views.__alloyId304.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "50",
        bottom: "0",
        backgroundColor: "#f5f5f5",
        id: "__alloyId307"
    });
    $.__views.__alloyId304.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createView({
        top: "10",
        left: "0",
        bottom: "10",
        width: "60",
        backgroundColor: "#f5f5f5",
        id: "__alloyId308"
    });
    $.__views.__alloyId304.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createView({
        top: "71",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId309"
    });
    $.__views.__alloyId304.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "60",
        height: "100%",
        left: "0",
        id: "__alloyId310"
    });
    $.__views.__alloyId304.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createImageView({
        image: "/images/icon-bolt.png",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createView({
        left: "60",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId312"
    });
    $.__views.__alloyId304.add($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createLabel(function() {
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
            text: "Instant Feedback",
            id: "__alloyId314"
        });
        return o;
    }());
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#185ae6"
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#185ae6"
        });
        _.extend(o, {
            text: "Starter Set",
            id: "__alloyId315"
        });
        return o;
    }());
    $.__views.__alloyId313.add($.__views.__alloyId315);
    $.__views.basicSwitch = Ti.UI.createSwitch(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            right: "10"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            right: 20,
            width: 550,
            height: 50
        });
        _.extend(o, {
            id: "basicSwitch",
            width: "100"
        });
        return o;
    }());
    $.__views.__alloyId304.add($.__views.basicSwitch);
    outputState ? $.__views.basicSwitch.addEventListener("change", outputState) : __defers["$.__views.basicSwitch!change!outputState"] = true;
    $.__views.__alloyId316 = Ti.UI.createTableViewRow(function() {
        var o = {};
        _.extend(o, {
            height: 70
        });
        Alloy.isTablet && _.extend(o, {
            height: 150
        });
        _.extend(o, {
            touchEnabled: "false",
            backgroundColor: "white",
            hasChild: "true",
            selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY,
            id: "__alloyId316"
        });
        return o;
    }());
    __alloyId305.push($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createView({
        top: "0",
        left: "10",
        width: "50",
        bottom: "0",
        backgroundColor: "#f5f5f5",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        top: "10",
        left: "0",
        bottom: "10",
        width: "60",
        backgroundColor: "#f5f5f5",
        id: "__alloyId319"
    });
    $.__views.__alloyId316.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createView({
        top: "71",
        left: "0",
        height: "20",
        width: "20",
        borderRadius: "8",
        backgroundColor: "#f5f5f5",
        id: "__alloyId320"
    });
    $.__views.__alloyId316.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "60",
        height: "100%",
        left: "0",
        id: "__alloyId321"
    });
    $.__views.__alloyId316.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        image: "/images/icon-set.png",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.__alloyId323 = Ti.UI.createView({
        left: "60",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId323"
    });
    $.__views.__alloyId316.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createLabel(function() {
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
            text: "Question Set",
            id: "__alloyId325"
        });
        return o;
    }());
    $.__views.__alloyId324.add($.__views.__alloyId325);
    $.__views.setText = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            left: 0,
            font: {
                fontSize: 14,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#185ae6"
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#185ae6"
        });
        _.extend(o, {
            text: "Starter Set",
            id: "setText"
        });
        return o;
    }());
    $.__views.__alloyId324.add($.__views.setText);
    $.__views.__alloyId303 = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            left: 10,
            right: 10,
            height: 180
        });
        Alloy.isTablet && _.extend(o, {
            top: 20,
            left: 10,
            right: 10,
            height: 300,
            width: 630,
            borderColor: "#b5b5b5",
            borderWidth: 1,
            borderRadius: 5,
            style: "Ti.UI.iPhone.TableViewStyle.GROUPED",
            backgroundColor: "transparent"
        });
        _.extend(o, {
            data: __alloyId305,
            scrollable: "false",
            id: "__alloyId303"
        });
        return o;
    }());
    $.__views.vertical.add($.__views.__alloyId303);
    handleTableViewClick ? $.__views.__alloyId303.addEventListener("click", handleTableViewClick) : __defers["$.__views.__alloyId303!click!handleTableViewClick"] = true;
    $.__views.__alloyId326 = Alloy.createController("start_btn", {
        color: "#348300",
        borderColor: "#205000",
        title: "Start Study Mode",
        id: "__alloyId326",
        __parentSymbol: $.__views.vertical
    });
    $.__views.__alloyId326.setParent($.__views.vertical);
    start ? $.__views.__alloyId326.on("click", start) : __defers["$.__views.__alloyId326!click!start"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId302,
        id: "navgroup"
    });
    $.__views.modal.add($.__views.navgroup);
    var __alloyId327 = function() {
        $.basicSwitch.value = _.isFunction(Alloy.Models.settings.transform) ? Alloy.Models.settings.transform()["instant_feedback"] : Alloy.Models.settings.get("instant_feedback");
        $.basicSwitch.value = _.isFunction(Alloy.Models.settings.transform) ? Alloy.Models.settings.transform()["instant_feedback"] : Alloy.Models.settings.get("instant_feedback");
    };
    Alloy.Models.settings.on("fetch change destroy", __alloyId327);
    exports.destroy = function() {
        Alloy.Models.settings.off("fetch change destroy", __alloyId327);
    };
    _.extend($, $.__views);
    var settings = Alloy.Models.settings;
    Alloy.Collections.exams;
    $.basicSwitch.value = settings.toJSON().instant_feedback;
    var new_window;
    var settings = Alloy.Models.settings;
    settings.on("change:question_set", function() {
        var transform = this.toJSON();
        0 == transform.question_set ? $.setText.text = "Starter Set" : 1 == transform.question_set ? $.setText.text = "Full Set" : 2 == transform.question_set ? $.setText.text = "Block A" : 3 == transform.question_set ? $.setText.text = "Block B" : 4 == transform.question_set ? $.setText.text = "Block C" : 5 == transform.question_set ? $.setText.text = "Block D" : 6 == transform.question_set ? $.setText.text = "Block E" : 7 == transform.question_set && ($.setText.text = "Block F");
    });
    settings.trigger("change:question_set");
    __defers["$.__views.__alloyId302!open!fireSetEvent"] && $.__views.__alloyId302.addEventListener("open", fireSetEvent);
    __defers["$.__views.cancel_btn!click!closeModal"] && $.__views.cancel_btn.on("click", closeModal);
    __defers["$.__views.basicSwitch!change!outputState"] && $.__views.basicSwitch.addEventListener("change", outputState);
    __defers["$.__views.__alloyId303!click!handleTableViewClick"] && $.__views.__alloyId303.addEventListener("click", handleTableViewClick);
    __defers["$.__views.__alloyId326!click!start"] && $.__views.__alloyId326.on("click", start);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
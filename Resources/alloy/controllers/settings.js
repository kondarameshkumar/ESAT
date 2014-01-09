function Controller() {
    function closeModal() {
        $.modal.close();
    }
    function openRestore() {
        new_window = Alloy.createController("restorepurchases").getView();
        $.navgroup.open(new_window);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
            width: "85%",
            height: "90%",
            borderRadius: 5,
            backgroundColor: "white"
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: "100%",
            backgroundColor: "#eeeeee",
            top: 20
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
    $.__views.__alloyId255 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId255"
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
    $.__views.__alloyId255.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            font: {
                fontSize: 24,
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
            text: "Settings",
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
    $.__views.scrollView = Ti.UI.createScrollView({
        layout: "vertical",
        top: 45,
        bottom: 0,
        id: "scrollView"
    });
    $.__views.__alloyId255.add($.__views.scrollView);
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222",
            top: 10,
            left: 10
        });
        Alloy.isTablet && _.extend(o, {
            top: 50,
            left: 20,
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        _.extend(o, {
            text: "Profile",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.horizontal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "horizontal",
            top: 20,
            left: 20,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "horizontal",
            top: 10,
            left: 10,
            right: 10,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {
            id: "horizontal"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.horizontal);
    $.__views.__alloyId256 = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            top: "10",
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            text: "Name:",
            id: "__alloyId256"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.__alloyId256);
    $.__views.first = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            top: "10",
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            id: "first"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.first);
    $.__views.last = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            top: "10",
            font: {
                fontSize: 25,
                fontFamily: "AvenirLTStd-Roman"
            }
        });
        _.extend(o, {
            id: "last"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.last);
    $.__views.restore_btn = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: "20",
            left: "10",
            right: "10"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 30,
                fontFamily: "AvenirLTStd-Roman"
            },
            top: "30",
            height: 60,
            left: "20",
            right: "20",
            borderColor: "#b5b5b5",
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: "white"
        });
        _.extend(o, {
            id: "restore_btn",
            title: "Restore Purchases"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.restore_btn);
    openRestore ? $.__views.restore_btn.addEventListener("click", openRestore) : __defers["$.__views.restore_btn!click!openRestore"] = true;
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId255,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    $.first.text = " " + user.toJSON().firstName + " ";
    $.last.text = user.toJSON().lastName;
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    __defers["$.__views.restore_btn!click!openRestore"] && $.__views.restore_btn.addEventListener("click", openRestore);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
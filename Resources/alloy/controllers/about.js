function Controller() {
    function closeModal(e) {
        $.modal.fireEvent("removeClose", e);
    }
    function handleHowTo() {
        var url = "http://elearning.csa.ca/applications/electrical/exam/howto";
        new_window = Alloy.createController("openurl", url).getView();
        $.navgroup.open(new_window);
    }
    function handleEmail() {
        var emailDialog = Titanium.UI.createEmailDialog();
        emailDialog.toRecipients = [ "training@csagroup.org" ];
        emailDialog.open();
    }
    function handleWebsite() {
        var url = "http://shop.csa.ca";
        new_window = Alloy.createController("openurl", url).getView();
        $.navgroup.open(new_window);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.about = Ti.UI.createView({
        backgroundImage: "/images/pattern.png",
        backgroundRepeat: true,
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
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
    $.__views.about.add($.__views.overlay);
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
            width: "100%",
            top: 20,
            backgroundColor: "#eeeeee"
        });
        _.extend(o, {
            id: "modal"
        });
        return o;
    }());
    $.__views.about.add($.__views.modal);
    $.__views.vertical = Ti.UI.createView({
        id: "vertical"
    });
    $.__views.modal.add($.__views.vertical);
    $.__views.__alloyId0 = Ti.UI.createWindow({
        navBarHidden: "true",
        id: "__alloyId0"
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
    $.__views.__alloyId0.add($.__views.header);
    $.__views.title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
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
            text: "About",
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
        id: "scrollView",
        showVerticalScrollIndicator: "true"
    });
    $.__views.__alloyId0.add($.__views.scrollView);
    $.__views.page_title = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            font: {
                fontSize: 22,
                fontFamily: "AvenirLTStd-Black"
            },
            color: "#222222"
        });
        Alloy.isTablet && _.extend(o, {
            top: 20,
            left: 20
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 10,
            left: 10
        });
        _.extend(o, {
            text: "About the App",
            id: "page_title"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.page_title);
    $.__views.horizontal = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            layout: "vertical",
            top: 20,
            left: 20,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            layout: "vertical",
            top: 10,
            left: 5,
            height: Titanium.UI.SIZE
        });
        _.extend(o, {
            id: "horizontal"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.horizontal);
    $.__views.desc_endors = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            top: 0,
            left: 0,
            height: Titanium.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            left: 0,
            width: 600
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 300
        });
        _.extend(o, {
            id: "desc_endors"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.desc_endors);
    $.__views.description = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontFamily: "AvenirLTStd-Roman"
        },
        color: "#222222",
        left: 0,
        text: "The Canadian Electrician C of Q (Certificate of Qualification) Practice Tool is based on the 2012 Canadian Electrical Code and the 2011 Red Seal National Occupational Analysis.",
        id: "description"
    });
    $.__views.desc_endors.add($.__views.description);
    $.__views.endors_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            width: "100%",
            height: 96,
            borderRadius: 5,
            borderColor: "#cbcbcb",
            borderWidth: 1,
            backgroundColor: "#fff"
        });
        Alloy.isTablet && _.extend(o, {
            top: 11
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 10
        });
        _.extend(o, {
            id: "endors_container"
        });
        return o;
    }());
    $.__views.desc_endors.add($.__views.endors_container);
    $.__views.endors_img = Ti.UI.createImageView({
        id: "endors_img"
    });
    $.__views.endors_container.add($.__views.endors_img);
    $.__views.btns = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            height: Titanium.UI.SIZE
        });
        Alloy.isTablet && _.extend(o, {
            top: 0
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 10
        });
        _.extend(o, {
            id: "btns"
        });
        return o;
    }());
    $.__views.horizontal.add($.__views.btns);
    $.__views.how_to_use_btn = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 55,
            borderRadius: 5,
            borderColor: "#cbcbcb",
            borderWidth: 1
        });
        Alloy.isTablet && _.extend(o, {
            top: 5,
            width: 600,
            left: 0
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 300,
            left: 0
        });
        _.extend(o, {
            id: "how_to_use_btn"
        });
        return o;
    }());
    $.__views.btns.add($.__views.how_to_use_btn);
    $.__views.how_to_btn = Alloy.createController("about_list_btn", {
        id: "how_to_btn",
        text: "How to use the app",
        image: "icon-question",
        __parentSymbol: $.__views.how_to_use_btn
    });
    $.__views.how_to_btn.setParent($.__views.how_to_use_btn);
    handleHowTo ? $.__views.how_to_btn.on("click", handleHowTo) : __defers["$.__views.how_to_btn!click!handleHowTo"] = true;
    $.__views.grouped_btns = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            layout: "vertical",
            top: 10,
            height: Titanium.UI.SIZE,
            borderRadius: 5,
            borderColor: "#cbcbcb",
            borderWidth: 1
        });
        Alloy.isTablet && _.extend(o, {
            width: 600,
            left: 0
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 300,
            left: 0
        });
        _.extend(o, {
            id: "grouped_btns"
        });
        return o;
    }());
    $.__views.btns.add($.__views.grouped_btns);
    $.__views.email_btn = Alloy.createController("about_list_btn", {
        id: "email_btn",
        text: "training@csagroup.org",
        image: "icon-mail",
        __parentSymbol: $.__views.grouped_btns
    });
    $.__views.email_btn.setParent($.__views.grouped_btns);
    handleEmail ? $.__views.email_btn.on("click", handleEmail) : __defers["$.__views.email_btn!click!handleEmail"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        height: 1,
        width: "100%",
        backgroundColor: "#e1e1e1",
        id: "__alloyId1"
    });
    $.__views.grouped_btns.add($.__views.__alloyId1);
    $.__views.website_btn = Alloy.createController("about_list_btn", {
        id: "website_btn",
        text: "shop.csa.ca",
        image: "icon-link",
        __parentSymbol: $.__views.grouped_btns
    });
    $.__views.website_btn.setParent($.__views.grouped_btns);
    handleWebsite ? $.__views.website_btn.on("click", handleWebsite) : __defers["$.__views.website_btn!click!handleWebsite"] = true;
    $.__views.version = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: "100%",
            textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
            font: {
                fontSize: 20,
                fontFamily: "AvenirLTStd-Roman"
            },
            color: "#666666",
            height: 40
        });
        Alloy.isTablet && _.extend(o, {
            top: 20
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            top: 10
        });
        _.extend(o, {
            text: "Version 2.2.1",
            id: "version"
        });
        return o;
    }());
    $.__views.scrollView.add($.__views.version);
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId0,
        id: "navgroup"
    });
    $.__views.vertical.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var formFactor = "handheld";
    Alloy.isTablet && (formFactor = "tablet");
    $.endors_img.image = "/images/endorsements-" + formFactor + ".png";
    __defers["$.__views.done_btn!click!closeModal"] && $.__views.done_btn.on("click", closeModal);
    __defers["$.__views.how_to_btn!click!handleHowTo"] && $.__views.how_to_btn.on("click", handleHowTo);
    __defers["$.__views.email_btn!click!handleEmail"] && $.__views.email_btn.on("click", handleEmail);
    __defers["$.__views.website_btn!click!handleWebsite"] && $.__views.website_btn.on("click", handleWebsite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
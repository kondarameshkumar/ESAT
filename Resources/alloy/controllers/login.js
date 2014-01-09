function Controller() {
    function SignUp() {
        var btnCancel = Ti.UI.createButton({
            systemButton: Ti.UI.iPhone.SystemButton.CANCEL
        });
        btnCancel.addEventListener("click", function() {
            window.close();
        });
        var webview = Titanium.UI.createWebView({
            url: "https://elearning.csa.ca/applications/register-redirect.php"
        });
        webview.addEventListener("load", function() {
            Ti.API.log("The URL changed to " + webview.url);
            var webviewURL = webview.url;
            Ti.API.log(webviewURL.indexOf("https://register.csa.ca/standards.csa.ca~eusr_reg~web/parentReload.jsp"));
            -1 != webviewURL.indexOf("https://register.csa.ca/standards.csa.ca~eusr_reg~web/parentReload.jsp") && window.close();
        });
        var window = Titanium.UI.createWindow();
        window.leftNavButton = btnCancel;
        window.add(webview);
        window.open({
            modal: true
        });
    }
    function handleClick(e) {
        if ("email_row" == e.source.id) $.email.focus(); else if ("password_row" == e.source.id) $.password.focus(); else {
            $.email.hasFocus && $.email.blur();
            $.password.hasFocus && $.password.blur();
        }
    }
    function handleFocus(e) {
        Ti.API.info("handleFocus");
        e.source.hasFocus = true;
        adjustForKeyboard();
    }
    function handleBlur(e) {
        Ti.API.info("handleBlur");
        e.source.hasFocus = false;
        unadjustForKeyboard();
    }
    function adjustForKeyboard() {
        $.login.orientation == Titanium.UI.LANDSCAPE_LEFT || $.login.orientation == Titanium.UI.LANDSCAPE_RIGHT ? $.login_view.animate(topLandscapeKeyboard_animation) : Alloy.isHandheld && $.login_view.animate(topPortraitKeyboard_animation);
    }
    function unadjustForKeyboard() {
        $.login.orientation == Titanium.UI.LANDSCAPE_LEFT || $.login.orientation == Titanium.UI.LANDSCAPE_RIGHT ? $.login_view.animate(topLandscapeNoKeyboard_animation) : Alloy.isHandheld && $.login_view.animate(topPortraitNoKeyboard_animation);
    }
    function checkTextField() {
        Ti.API.info("checkTextField");
        $.login_btn.enabled = $.email.value.length > 0 && $.password.value.length > 0 ? true : false;
    }
    function focusPassword() {
        Ti.API.info("focusPassword");
        $.password.focus();
    }
    function attemptLogin() {
        if (1 > $.email.value.length) {
            $.password.focus();
            animation.shake($.login_table_view, 0);
        } else {
            $.activityIndicator.show();
            $.login_btn.title = "Logging In";
            disable();
            user.login($.email.value, $.password.value, handleResult);
        }
    }
    function handleResult(response) {
        var dialog;
        if (response.success) {
            Ti.API.log("email: " + response.user.email);
            Ti.API.log("userRef: " + response.user.userRef);
            Ti.API.log("firstName: " + response.user.primaryAddress.firstName);
            Ti.API.log("lastName: " + response.user.primaryAddress.lastName);
            Ti.API.log("address: " + response.user.primaryAddress.addressLine1 + " " + response.user.primaryAddress.addressLine2);
            Ti.API.log("city: " + response.user.primaryAddress.city);
            Ti.API.log("state: " + response.user.primaryAddress.state);
            Ti.API.log("postalCode: " + response.user.primaryAddress.postalCode);
            Ti.API.log("country: " + response.user.primaryAddress.countryISO);
            Ti.API.log("phoneNumber: " + response.user.primaryAddress.phoneNumber);
            Ti.API.log("lang: " + response.user.extendedFields[0].lang);
            user.sendAndSet({
                username: response.user.email,
                password: $.password.value,
                email: response.user.email,
                userRef: response.user.userRef,
                firstName: response.user.primaryAddress.firstName,
                lastName: response.user.primaryAddress.lastName,
                address: response.user.primaryAddress.addressLine1 + " " + response.user.primaryAddress.addressLine2,
                city: response.user.primaryAddress.city,
                state: response.user.primaryAddress.state,
                postalCode: response.user.primaryAddress.postalCode,
                country: response.user.primaryAddress.countryISO,
                phoneNumber: response.user.primaryAddress.phoneNumber,
                lang: response.user.extendedFields[0].lang,
                loggedIn: 1,
                loggedInSince: moment().format("YYYY-MM-DD HH:mm:ss.SSS")
            });
            user.save();
            $.activityIndicator.hide();
            Alloy.createController("home").getView();
            $.login.close();
        } else if ("User not found" == response.error) {
            dialog = Ti.UI.createAlertDialog({
                message: "The email you entered does not belong to any account. Please re-enter your email and try again.",
                title: "Incorrect Email"
            }).show();
            tryUsernameAgain();
        } else if ("Incorrect Password" == response.error) {
            dialog = Ti.UI.createAlertDialog({
                message: "The password you entered is incorrect. Please try again.",
                title: "Incorrect Password"
            }).show();
            tryPasswordAgain();
        } else if ("No Internet Connection" == response.error) {
            dialog = Ti.UI.createAlertDialog({
                message: "Unable to connect. Please check your internet connection and try again.",
                title: "No Internet Connection"
            }).show();
            enable();
            $.activityIndicator.hide();
        } else {
            dialog = Ti.UI.createAlertDialog({
                message: "Unable to connect. Please try again.",
                title: "Error Connecting"
            }).show();
            enable();
            $.activityIndicator.hide();
        }
    }
    function tryUsernameAgain() {
        enable();
        $.activityIndicator.hide();
        $.login_btn.title = "Log In";
        $.email.value = "";
        $.email.focus();
    }
    function tryPasswordAgain() {
        enable();
        $.activityIndicator.hide();
        $.login_btn.title = "Log In";
        $.password.value = "";
        $.password.focus();
    }
    function disable() {
        $.login_btn.enabled = false;
        $.email.enabled = false;
        $.password.enabled = false;
        $.sign_up_btn.enabled = false;
    }
    function enable() {
        $.email.enabled = true;
        $.password.enabled = true;
        $.sign_up_btn.enabled = true;
    }
    function animateLogo() {
        var init_animation;
        init_animation = $.login.orientation == Titanium.UI.PORTRAIT || $.login.orientation == Titanium.UI.UPSIDE_PORTRAIT ? topPortrait_animation_init : topLandscapeNoKeyboard_animation_init;
        init_animation.addEventListener("complete", function() {
            animation.fadeIn($.form, 500);
            animation.fadeIn($.footer, 500);
        });
        $.login_view.animate(init_animation);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            orientationModes: [ Ti.UI.PORTRAIT ]
        });
        _.extend(o, {
            backgroundColor: "#cfcfcf",
            backgroundGradient: {
                type: "radial",
                colors: [ "rgba(255,255,255,0)", "#fff" ],
                startRadius: "75%",
                endRadius: 0
            },
            id: "login"
        });
        return o;
    }());
    $.__views.login && $.addTopLevelView($.__views.login);
    handleClick ? $.__views.login.addEventListener("click", handleClick) : __defers["$.__views.login!click!handleClick"] = true;
    animateLogo ? $.__views.login.addEventListener("open", animateLogo) : __defers["$.__views.login!open!animateLogo"] = true;
    $.__views.login_view = Ti.UI.createView({
        layout: "vertical",
        id: "login_view"
    });
    $.__views.login.add($.__views.login_view);
    $.__views.logo = Ti.UI.createImageView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 145,
            height: 75,
            image: "/images/login-logo-phone.png",
            touchEnabled: false
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 224,
            height: 115,
            image: "/images/login-logo-tablet.png",
            touchEnabled: false
        });
        _.extend(o, {
            id: "logo"
        });
        return o;
    }());
    $.__views.login_view.add($.__views.logo);
    $.__views.form = Ti.UI.createView({
        layout: "vertical",
        opacity: 0,
        id: "form"
    });
    $.__views.login_view.add($.__views.form);
    $.__views.email_row = Ti.UI.createTableViewRow({
        height: 42,
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "email_row"
    });
    var __alloyId36 = [];
    __alloyId36.push($.__views.email_row);
    $.__views.email_fix = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 42
        });
        Alloy.isTablet && _.extend(o, {
            width: 410
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 280
        });
        _.extend(o, {
            id: "email_fix"
        });
        return o;
    }());
    $.__views.email_row.add($.__views.email_fix);
    $.__views.email = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            left: 10,
            height: Ti.UI.SIZE,
            clearButtonMode: true,
            textAlign: "left",
            touchEnabled: true,
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            enableReturnKey: true
        });
        Alloy.isTablet && _.extend(o, {
            width: 390
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 260
        });
        _.extend(o, {
            keyboardType: Titanium.UI.KEYBOARD_EMAIL,
            returnKeyType: Titanium.UI.RETURNKEY_NEXT,
            id: "email",
            hintText: "Email",
            autocorrect: "false"
        });
        return o;
    }());
    $.__views.email_fix.add($.__views.email);
    handleFocus ? $.__views.email.addEventListener("focus", handleFocus) : __defers["$.__views.email!focus!handleFocus"] = true;
    handleBlur ? $.__views.email.addEventListener("blur", handleBlur) : __defers["$.__views.email!blur!handleBlur"] = true;
    focusPassword ? $.__views.email.addEventListener("return", focusPassword) : __defers["$.__views.email!return!focusPassword"] = true;
    checkTextField ? $.__views.email.addEventListener("change", checkTextField) : __defers["$.__views.email!change!checkTextField"] = true;
    $.__views.password_row = Ti.UI.createTableViewRow({
        height: 42,
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "password_row"
    });
    __alloyId36.push($.__views.password_row);
    $.__views.password_fix = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 42
        });
        Alloy.isTablet && _.extend(o, {
            width: 410
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 280
        });
        _.extend(o, {
            id: "password_fix"
        });
        return o;
    }());
    $.__views.password_row.add($.__views.password_fix);
    $.__views.password = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            left: 10,
            height: Ti.UI.SIZE,
            clearButtonMode: true,
            textAlign: "left",
            touchEnabled: true,
            autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
            enableReturnKey: true
        });
        Alloy.isTablet && _.extend(o, {
            width: 390
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 260
        });
        _.extend(o, {
            returnKeyType: Titanium.UI.RETURNKEY_GO,
            id: "password",
            hintText: "Password",
            passwordMask: "true"
        });
        return o;
    }());
    $.__views.password_fix.add($.__views.password);
    handleFocus ? $.__views.password.addEventListener("focus", handleFocus) : __defers["$.__views.password!focus!handleFocus"] = true;
    handleBlur ? $.__views.password.addEventListener("blur", handleBlur) : __defers["$.__views.password!blur!handleBlur"] = true;
    attemptLogin ? $.__views.password.addEventListener("return", attemptLogin) : __defers["$.__views.password!return!attemptLogin"] = true;
    checkTextField ? $.__views.password.addEventListener("change", checkTextField) : __defers["$.__views.password!change!checkTextField"] = true;
    $.__views.login_table_view = Ti.UI.createTableView(function() {
        var o = {};
        _.extend(o, {
            rowHeight: 42,
            backgroundColor: "transparent",
            rowBackgroundColor: "white",
            scrollable: false
        });
        Alloy.isTablet && _.extend(o, {
            height: 130,
            width: 470
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            height: 115,
            width: 300
        });
        _.extend(o, {
            style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
            data: __alloyId36,
            id: "login_table_view"
        });
        return o;
    }());
    $.__views.form.add($.__views.login_table_view);
    $.__views.login_btn_view = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            width: 410
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 280
        });
        _.extend(o, {
            id: "login_btn_view"
        });
        return o;
    }());
    $.__views.form.add($.__views.login_btn_view);
    $.__views.login_btn = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {
            height: 42
        });
        Alloy.isTablet && _.extend(o, {
            width: 410
        });
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            width: 280
        });
        _.extend(o, {
            enabled: false,
            id: "login_btn",
            title: "Log In"
        });
        return o;
    }());
    $.__views.login_btn_view.add($.__views.login_btn);
    attemptLogin ? $.__views.login_btn.addEventListener("click", attemptLogin) : __defers["$.__views.login_btn!click!attemptLogin"] = true;
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        right: 20,
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        id: "activityIndicator"
    });
    $.__views.login_btn_view.add($.__views.activityIndicator);
    $.__views.footer = Ti.UI.createView({
        height: "90",
        bottom: "0",
        opacity: 0,
        id: "footer"
    });
    $.__views.login.add($.__views.footer);
    $.__views.sign_up_btn = Ti.UI.createButton({
        height: 42,
        width: 158,
        id: "sign_up_btn",
        title: "Sign Up for Free"
    });
    $.__views.footer.add($.__views.sign_up_btn);
    SignUp ? $.__views.sign_up_btn.addEventListener("click", SignUp) : __defers["$.__views.sign_up_btn!click!SignUp"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    var animation = require("alloy/animation");
    var statusBarHeight = 20;
    var keyboardPortraitHeight;
    var keyboardLandscapeHeight;
    $.login_view.height = Number($.logo.height) + Number($.login_table_view.height) + Number($.login_btn.height);
    var landscapeHeight;
    var portraitHeight;
    if (Titanium.Platform.displayCaps.platformHeight > Titanium.Platform.displayCaps.platformWidth) {
        landscapeHeight = Titanium.Platform.displayCaps.platformWidth;
        portraitHeight = Titanium.Platform.displayCaps.platformHeight;
    } else {
        portraitHeight = Titanium.Platform.displayCaps.platformWidth;
        landscapeHeight = Titanium.Platform.displayCaps.platformHeight;
    }
    if (Alloy.isTablet) {
        $.login_view.top = (Titanium.Platform.displayCaps.platformHeight - statusBarHeight - $.logo.height) / 2;
        keyboardPortraitHeight = 264;
        keyboardLandscapeHeight = 352;
    } else {
        $.login_view.top = (Titanium.Platform.displayCaps.platformHeight - $.logo.height) / 2 - statusBarHeight;
        keyboardPortraitHeight = 236;
    }
    var topLandscapeKeyboard = (landscapeHeight - keyboardLandscapeHeight - $.login_view.height) / 2;
    var topLandscapeNoKeyboard = (landscapeHeight - $.login_view.height - $.footer.height) / 2;
    var topPortraitKeyboard = (portraitHeight - keyboardPortraitHeight - $.login_view.height) / 2;
    var topPortraitNoKeyboard = (portraitHeight - $.login_view.height - $.footer.height) / 2;
    var topPortraitKeyboard_animation = Ti.UI.createAnimation({
        top: topPortraitKeyboard,
        duration: 200
    });
    var topPortraitNoKeyboard_animation = Ti.UI.createAnimation({
        top: topPortraitNoKeyboard,
        duration: 200
    });
    var topLandscapeNoKeyboard_animation_init = Ti.UI.createAnimation({
        top: topLandscapeNoKeyboard,
        duration: 500
    });
    var topPortrait_animation_init = Ti.UI.createAnimation({
        top: topPortraitNoKeyboard,
        duration: 500
    });
    var topLandscapeKeyboard_animation = Ti.UI.createAnimation({
        top: topLandscapeKeyboard,
        duration: 200
    });
    var topLandscapeNoKeyboard_animation = Ti.UI.createAnimation({
        top: topLandscapeNoKeyboard,
        duration: 200
    });
    Titanium.Gesture.addEventListener("orientationchange", function(e) {
        if (Alloy.isTablet) {
            (e.orientation == Titanium.UI.LANDSCAPE_LEFT || e.orientation == Titanium.UI.LANDSCAPE_RIGHT) && ($.login_view.top = Titanium.App.keyboardVisible ? topLandscapeKeyboard : topLandscapeNoKeyboard);
            (e.orientation == Titanium.UI.PORTRAIT || e.orientation == Titanium.UI.UPSIDE_PORTRAIT) && ($.login_view.top = topPortraitNoKeyboard);
        }
    });
    $.login.open();
    __defers["$.__views.login!click!handleClick"] && $.__views.login.addEventListener("click", handleClick);
    __defers["$.__views.login!open!animateLogo"] && $.__views.login.addEventListener("open", animateLogo);
    __defers["$.__views.email!focus!handleFocus"] && $.__views.email.addEventListener("focus", handleFocus);
    __defers["$.__views.email!blur!handleBlur"] && $.__views.email.addEventListener("blur", handleBlur);
    __defers["$.__views.email!return!focusPassword"] && $.__views.email.addEventListener("return", focusPassword);
    __defers["$.__views.email!change!checkTextField"] && $.__views.email.addEventListener("change", checkTextField);
    __defers["$.__views.password!focus!handleFocus"] && $.__views.password.addEventListener("focus", handleFocus);
    __defers["$.__views.password!blur!handleBlur"] && $.__views.password.addEventListener("blur", handleBlur);
    __defers["$.__views.password!return!attemptLogin"] && $.__views.password.addEventListener("return", attemptLogin);
    __defers["$.__views.password!change!checkTextField"] && $.__views.password.addEventListener("change", checkTextField);
    __defers["$.__views.login_btn!click!attemptLogin"] && $.__views.login_btn.addEventListener("click", attemptLogin);
    __defers["$.__views.sign_up_btn!click!SignUp"] && $.__views.sign_up_btn.addEventListener("click", SignUp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
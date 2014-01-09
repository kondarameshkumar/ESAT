var user = Alloy.Models.user;
var animation = require('alloy/animation');
var statusBarHeight = 20; //Math.round((25 * Titanium.Platform.displayCaps.dpi)/160);
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

var topPortraitKeyboard_animation = Ti.UI.createAnimation({ top: topPortraitKeyboard, duration: 200 });
var topPortraitNoKeyboard_animation =  Ti.UI.createAnimation({ top: topPortraitNoKeyboard, duration: 200 });

var topLandscapeNoKeyboard_animation_init =  Ti.UI.createAnimation({ top: topLandscapeNoKeyboard, duration: 500 });
var topPortrait_animation_init =  Ti.UI.createAnimation({ top: topPortraitNoKeyboard, duration: 500 });

var topLandscapeKeyboard_animation = Ti.UI.createAnimation({ top: topLandscapeKeyboard, duration: 200 });
var topLandscapeNoKeyboard_animation =  Ti.UI.createAnimation({ top: topLandscapeNoKeyboard, duration: 200 });

function SignUp(e) {
	var btnCancel = Ti.UI.createButton({systemButton: Ti.UI.iPhone.SystemButton.CANCEL});
	btnCancel.addEventListener('click',function(e){
		window.close();
	});
	var webview = Titanium.UI.createWebView({url:'https://elearning.csa.ca/applications/register-redirect.php'});
	webview.addEventListener('load',function(){
	    Ti.API.log('The URL changed to '+webview.url);
	    var webviewURL = webview.url;
	    Ti.API.log(webviewURL.indexOf("https://register.csa.ca/standards.csa.ca~eusr_reg~web/parentReload.jsp"));
	    if (webviewURL.indexOf("https://register.csa.ca/standards.csa.ca~eusr_reg~web/parentReload.jsp") != -1) {
	    	window.close();
	    }
	});
	var window = Titanium.UI.createWindow();
	window.leftNavButton = btnCancel;
	window.add(webview);
    window.open({modal:true});
}
function handleClick(e) {
	if (e.source.id == "email_row") {
		$.email.focus();
	} else if (e.source.id == "password_row") {
		$.password.focus();
	} else {
		if ($.email.hasFocus) $.email.blur();
		if ($.password.hasFocus) $.password.blur();
	}
}
function handlePostLayout(e) {
	Ti.API.log("handlePostLayout: " + e.source)
}
function handleFocus(e) {
	Ti.API.info('handleFocus');
	e.source.hasFocus = true;
	adjustForKeyboard();
}
function handleBlur(e) {
	Ti.API.info('handleBlur');
	e.source.hasFocus = false;
	unadjustForKeyboard();
}
function adjustForKeyboard() {
	if ($.login.orientation == Titanium.UI.LANDSCAPE_LEFT || $.login.orientation == Titanium.UI.LANDSCAPE_RIGHT) {
		$.login_view.animate(topLandscapeKeyboard_animation);
	} else if (Alloy.isHandheld) {
		$.login_view.animate(topPortraitKeyboard_animation);
	}
}
function unadjustForKeyboard() {
	if ($.login.orientation == Titanium.UI.LANDSCAPE_LEFT || $.login.orientation == Titanium.UI.LANDSCAPE_RIGHT) {
		$.login_view.animate(topLandscapeNoKeyboard_animation);
	} else if (Alloy.isHandheld) {
		$.login_view.animate(topPortraitNoKeyboard_animation);
	}
}
function checkTextField(e) {
	Ti.API.info('checkTextField');
	if ($.email.value.length > 0 && $.password.value.length > 0) {
		$.login_btn.enabled = true;
	} else {
		$.login_btn.enabled = false;
	}
}
function focusPassword(e) {
	Ti.API.info('focusPassword');
	$.password.focus();
}
function attemptLogin(e) {
	
	if ($.email.value.length < 1) {
		$.password.focus();
		animation.shake($.login_table_view, 0);
	} else {
		$.activityIndicator.show();
		$.login_btn.title = "Logging In";
		disable();
		var result = user.login($.email.value, $.password.value, handleResult);
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
            loggedInSince: moment().format('YYYY-MM-DD HH:mm:ss.SSS')
        });
        user.save();
		$.activityIndicator.hide();
		Alloy.createController('home').getView();
		$.login.close();
	} else {
		if (response.error == "User not found") {
			dialog = Ti.UI.createAlertDialog({
				message: 'The email you entered does not belong to any account. Please re-enter your email and try again.',
				title: 'Incorrect Email'
			}).show();
			tryUsernameAgain();
		} else if (response.error == "Incorrect Password") {
			dialog = Ti.UI.createAlertDialog({
				message: 'The password you entered is incorrect. Please try again.',
				title: 'Incorrect Password'
			}).show();
			tryPasswordAgain();
		} else if (response.error == "No Internet Connection") {
			dialog = Ti.UI.createAlertDialog({
				message: 'Unable to connect. Please check your internet connection and try again.',
				title: 'No Internet Connection'
			}).show();
			enable();
			$.activityIndicator.hide();
		} else {
			dialog = Ti.UI.createAlertDialog({
				message: 'Unable to connect. Please try again.',
				title: 'Error Connecting'
			}).show();
			enable();
			$.activityIndicator.hide();
		}
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
function animateLogo(e) {
	var init_animation;
	if ($.login.orientation == Titanium.UI.PORTRAIT || $.login.orientation == Titanium.UI.UPSIDE_PORTRAIT) {
		init_animation = topPortrait_animation_init;
	} else {
		init_animation = topLandscapeNoKeyboard_animation_init;
	}
	init_animation.addEventListener("complete", function() {
		animation.fadeIn($.form, 500);
		animation.fadeIn($.footer, 500);
	})
    $.login_view.animate(init_animation);
}

Titanium.Gesture.addEventListener('orientationchange', function(e){
	if (Alloy.isTablet) {
		if(e.orientation == Titanium.UI.LANDSCAPE_LEFT  || e.orientation == Titanium.UI.LANDSCAPE_RIGHT){
	    	if (Titanium.App.keyboardVisible) {
	    		$.login_view.top = topLandscapeKeyboard;
	    	} else {
	    		$.login_view.top = topLandscapeNoKeyboard;
	    	}
	    }
	    if(e.orientation == Titanium.UI.PORTRAIT || e.orientation == Titanium.UI.UPSIDE_PORTRAIT){
	    	$.login_view.top = topPortraitNoKeyboard;
	    }
	}
});

$.login.open();

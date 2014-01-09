var args = arguments[0] || {};
var formFactor = "handheld";
var move = false;

if (Alloy.isTablet) formFactor = "tablet";
$.image_view.image = "/images/" + args.image + "-" + formFactor + ".png";

$.label.text = args.text;

if (args.position == "left") {
	$.btn.left = 0;
	$.divider.right = 0;
} else {
	$.btn.right = 0;
	$.divider.left = 0;
}
function handleBtnTouchStart(e) {
	$.navbar_btn.backgroundColor = "#dadada";
}
function handleBtnTouchEnd(e) {
	if (!move) {
		$.navbar_btn.backgroundColor = "transparent";
		$.trigger('click', e);
	} else {
		move = false;
	}
}
function handleBtnTouchCancel(e) {
	$.navbar_btn.backgroundColor = "transparent";
}
function handleBtnTouchMove(e) {
	$.navbar_btn.backgroundColor = "transparent";
	move = true;
}
var args = arguments[0] || {};
var move = false;
var formFactor = "handheld";
if (Alloy.isTablet) {
	args.order == 1 ? $.button_container.left = 0 : $.button_container.right = 0;
	formFactor = "tablet";
} else {
	args.order == 1 ? $.button_container.top = 0 : $.button_container.bottom = 0;
}

$.icon.image = "/images/" + args.image + "-" + formFactor + ".png";

$.title.text = args.title;
$.description.text = args.description;


exports.disableTouch = function() {
	$.button_container.touchEnabled = false;
	$.button_container.backgroundColor = "#cccccc";
	$.icon_container.backgroundColor = "#bbbbbb";
	$.title.color = "#5e5e5e";
	$.description.color = "#666666";
	$.lock.visible = true;
	$.description.text = args.disabledDescription;
};
exports.enableTouch = function() {
	$.button_container.touchEnabled = true;
	$.button_container.backgroundColor = "#fafafa";
		$.icon_container.backgroundColor = "#f5f5f5";
	$.title.color = "#222222";
	$.description.color = "#666666";
	$.lock.visible = false;
	$.description.text = args.description;
};
function handleBtnTouchStart(e) {
	$.button_container.backgroundColor = "#dadada";
	$.icon_container.backgroundColor = "#d5d5d5";
}
function handleBtnTouchEnd(e) {
	if (!move) {
		$.button_container.backgroundColor = "#fafafa";
		$.icon_container.backgroundColor = "#f5f5f5";
		$.trigger('click', e);
	} else {
		move = false;
	}
}
function handleBtnTouchMove(e) {
	$.button_container.backgroundColor = "#fafafa";
	$.icon_container.backgroundColor = "#f5f5f5";
	move = true;
}
function handleBtnTouchCancel(e) {
	$.button_container.backgroundColor = "#fafafa";
	$.icon_container.backgroundColor = "#f5f5f5";
}
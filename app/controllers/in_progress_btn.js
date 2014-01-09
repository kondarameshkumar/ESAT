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

var colors = args.colors || "#f5f5f5,#fafafa";
colors = colors.split(",");

$.icon_container.backgroundColor = colors[0];
$.button_container.backgroundColor = colors[1];

var textColor = args.textColor || "#000,#666";

textColor = textColor.split(",");

$.title.color = textColor[0];
$.description.color = textColor[1];

exports.setDescription = function(value) {
	$.description.text = value;
}

function handleBtnTouchStart(e) {
	$.button_container.backgroundColor = "#d5d5d5";
	$.icon_container.backgroundColor = "#dadada";
}
function handleBtnTouchEnd(e) {
	if (!move) {
		$.button_container.backgroundColor = colors[0];
		$.icon_container.backgroundColor = colors[1];
		$.trigger('click', e);
	} else {
		move = false;
	}
}
function handleBtnTouchMove(e) {
	$.button_container.backgroundColor = colors[0];
	$.icon_container.backgroundColor = colors[1];
	move = true;
}
function handleBtnTouchCancel(e) {
	$.button_container.backgroundColor = colors[0];
	$.icon_container.backgroundColor = colors[0];
}
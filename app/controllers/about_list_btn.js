var args = arguments[0] || {};
var move = false;
var formFactor = "handheld";
if (Alloy.isTablet) {
	//args.order == 1 ? $.button_container.left = 0 : $.button_container.right = 0;
	formFactor = "tablet";
} else {
	//args.order == 1 ? $.button_container.top = 0 : $.button_container.bottom = 0;
}

$.icon.image = "/images/" + args.image + "-" + formFactor + ".png";

$.title.text = args.text;

function handleBtnTouchStart(e) {
	$.button_container.backgroundColor = "#dadada";
	$.icon_container.backgroundColor = "#d5d5d5";
}
function handleBtnTouchEnd(e) {
	if (!move) {
		unselectedState();
    	$.trigger('click', e);
	} else {
		move = false;
	}
}
function handleBtnTouchMove(e) {
	unselectedState();
	move = true;
}
function handleBtnTouchCancel(e) {
	unselectedState();
}
function unselectedState() {
	$.button_container.backgroundColor = "#fafafa";
	$.icon_container.backgroundColor = "#f5f5f5";
}
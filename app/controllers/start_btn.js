var args = arguments[0] || {};

var move = false;

var formFactor = "handheld";
if (Alloy.isTablet) {
	args.order == 1 ? $.button_container.left = 0 : $.button_container.right = 0;
	formFactor = "tablet";
} else {
	args.order == 1 ? $.button_container.top = 0 : $.button_container.bottom = 0;
}

$.button_container.backgroundColor = args.color;
$.button_container.borderColor = args.borderColor;
$.button_container.borderWidth = 1;
$.button_container.borderRadius = 10;
$.title.text = args.title;

function handleBtnTouchStart(e) {
	$.button_container.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ 'rgba(0,0,0,0.20)', 'rgba(250,250,250,0.20)']
    }
}
function unselectedState() {
	$.button_container.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ 'rgba(250,250,250,0.20)', 'rgba(0,0,0,0.20)']
    }
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
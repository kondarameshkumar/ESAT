var move = false;

function handleBtnTouchStart(e) {
	$.btn.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ '#1f4790', '#122b57']
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
function unselectedState() {
	$.btn.backgroundGradient = {
        type: 'linear',
        startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
        colors: [ '#2c66ce', '#1a3e7c']
    }
}

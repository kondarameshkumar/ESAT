var move = false;

function handleBtnTouchStart(e) {
	$.btn.backgroundImage = "/images/exit.png";
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
	$.btn.backgroundImage = "/images/exit.png";
}
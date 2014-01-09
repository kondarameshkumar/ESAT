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

$.title.text = args.title;
$.description.text = args.description;

var buy_btn = Alloy.createController('buy_btn', args).getView();
buy_btn.addEventListener('click', function(e) {
	if (e.productid != undefined) {
		$.trigger('click', e);
	}
});
exports.markProductAsPurchased = function() {
	buy_btn.markProductAsPurchased();
}
$.container_view.add(buy_btn);
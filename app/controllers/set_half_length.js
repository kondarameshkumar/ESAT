var args = arguments[0] || {};

$.title_label.text = args.title;
$.block_label.text = args.block;

var buy_btn = Alloy.createController('buy_btn', args);
var buy_btn_view = buy_btn.getView();
buy_btn_view.addEventListener('click', function(e) {
	if (e.productid != undefined) {
		$.trigger('click', e);
	}
});
exports.markProductAsPurchased = function() {
	buy_btn.markProductAsPurchased();
}
$.container_view.add(buy_btn_view);
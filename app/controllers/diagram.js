var args = arguments[0] || {};
$.iv.image = args.image;

function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
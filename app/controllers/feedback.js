var args = arguments[0] || {};
$.feedback_txt.text = args.text;

function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
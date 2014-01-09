var formFactor = "handheld";
var new_view;
var new_window;
if (Alloy.isTablet) {
formFactor = "tablet";
function closeModal() {
$.win.close();
};
}
var formFactor = "handheld";
if (Alloy.isTablet) {
	formFactor = "tablet";
}
$.endors_img.image = "/images/endorsements" + "-" + formFactor + ".png";
function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
function handleHowTo(e) {
	//Titanium.Platform.openURL('http://elearning.csa.ca/applications/electrical/exam/howto');
	var url = 'http://elearning.csa.ca/applications/electrical/exam/howto';
    new_window = Alloy.createController("openurl",url).getView();
    $.navgroup.open(new_window); 
}
function handleEmail(e) {
	var emailDialog = Titanium.UI.createEmailDialog();
	
	emailDialog.toRecipients = ['training@csagroup.org'];
	emailDialog.open();
}
function handleWebsite(e) {
   var url = 'http://shop.csa.ca';
   new_window = Alloy.createController("openurl",url).getView();
   $.navgroup.open(new_window); 
}

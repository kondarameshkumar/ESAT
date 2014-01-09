function closeModal(e) {
	$.win.fireEvent("removeClose", e);
}
/*function handleTableViewClick(e) {
	if (e.index == 0) {
		Titanium.Platform.openURL('http://shop.csa.ca/invt/27034302012?source=esat-ios');
	} else if (e.index == 1) {
		Titanium.Platform.openURL('http://shop.csa.ca/invt/27034292012?source=esat-ios');
	} else if (e.index == 2) {
		Titanium.Platform.openURL('http://shop.csa.ca/invt/27013892012?source=esat-ios');
	} else if (e.index == 3) {
		Titanium.Platform.openURL('http://shop.csa.ca/invt/27014902012?source=esat-ios');
	}
}*/
function handleTableViewClick(e) {
var url = "";
if (e.index == 0) {
 
url ='http://shop.csa.ca/invt/27034302012?source=esat-ios';
  
}else if (e.index == 1) {
 
url ='http://shop.csa.ca/invt/27034292012?source=esat-ios';
 
}else if (e.index == 2) {
 
url ='http://shop.csa.ca/invt/27013892012?source=esat-ios';
 
} else if (e.index == 3) {
 
url ='http://shop.csa.ca/invt/27014902012?source=esat-ios';
 
} 
 
new_window = Alloy.createController("openurl",url).getView();
 
$.navgroup.open(new_window); 
 
}





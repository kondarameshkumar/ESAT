var settings = Alloy.Models.settings;

if (settings.toJSON().question_set < 2) {
	$.tv.data[0].rows[settings.toJSON().question_set].hasCheck = true;
} else {
	$.tv.data[1].rows[Number(settings.toJSON().question_set) - 2].hasCheck = true;
}

function closeModal(e) {
	$.modal.fireEvent("removeClose", e);
}
/*function handleTableViewClick(e) {
	if (Alloy.Globals.purchases[e.index] == 1 || Alloy.Globals.purchases[1] == 1) {
		for (var i=0; i < $.tv.data[0].rows.length; i++) {
			$.tv.data[0].rows[i].hasCheck = false;
		}
		for (var i=0; i < $.tv.data[1].rows.length; i++) {
			$.tv.data[1].rows[i].hasCheck = false;
		}
		e.row.hasCheck = true;
		Ti.API.info(" e.index: " +  e.index);
		settings.set({
			question_set: e.index
		});
		settings.save();
	} else {
		alert("You must purchase this item before being able to select it");
	}
	
}*/
function handleTableViewClick(e) {
if (Alloy.Globals.purchases[e.index] == 1 || Alloy.Globals.purchases[1] == 1) {
for (var i=0; i < $.tv.data[0].rows.length; i++) {
$.tv.data[0].rows[i].hasCheck = false;
}
for (var i=0; i < $.tv.data[1].rows.length; i++) {
$.tv.data[1].rows[i].hasCheck = false;
}
e.row.hasCheck = true;
Ti.API.info(" e.index: " +  e.index);
settings.set({
question_set: e.index
});
settings.save();
} 
else {
for (var i=0; i < $.tv.data[0].rows.length; i++)
 {
 $.tv.data[0].rows[i].hasCheck = false;
 }
for (var i=0; i < $.tv.data[1].rows.length; i++) 
{
 $.tv.data[1].rows[i].hasCheck = false;
}
  e.row.hasCheck = true;
  Ti.API.info(" e.index: " +  e.index);
 settings.set({
 question_set: e.index
});
settings.save();
//alert("You must purchase this item before being able to select it");
}
/*Ti.API.debug("handleTableViewClick");
if (e.index == 1) {//alert("exam");
new_window = Alloy.createController("questions_packs_FullSet").getView();
$.navgroup.open(new_window);
}*/
}
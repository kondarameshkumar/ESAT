function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "modeItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId37 = [];
    var __alloyId39 = {
        type: "Ti.UI.Label",
        bindId: "label",
        properties: {
            bindId: "label"
        }
    };
    __alloyId37.push(__alloyId39);
    $.__views.modeItem = {
        properties: {
            name: "template",
            id: "modeItem"
        },
        childTemplates: __alloyId37
    };
    __itemTemplate["template"] = $.__views.modeItem;
    $.__views.modeItem && $.addTopLevelView($.__views.modeItem);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
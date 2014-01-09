function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "indicator";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.indicator = Ti.UI.createView({
        backgroundColor: "rgba(0,0,0,0.50)",
        width: "100%",
        height: "100%",
        id: "indicator"
    });
    $.__views.indicator && $.addTopLevelView($.__views.indicator);
    $.__views.ai = Ti.UI.createActivityIndicator({
        id: "ai"
    });
    $.__views.indicator.add($.__views.ai);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.ai.show();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
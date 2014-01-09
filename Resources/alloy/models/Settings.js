exports.definition = {
    config: {
        columns: {
            timer: "integer",
            instant_feedback: "integer",
            question_set: "integer"
        },
        defaults: {
            timer: 3,
            instant_feedback: 0,
            question_set: 0
        },
        adapter: {
            type: "sql",
            collection_name: "settings"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("settings", exports.definition, []);

collection = Alloy.C("settings", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
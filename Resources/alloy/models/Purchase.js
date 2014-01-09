exports.definition = {
    config: {
        columns: {
            title: "text",
            description: "text",
            price: "text",
            productid: "text",
            appleid: "text",
            purchased: "integer",
            date_purchased: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "purchase"
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

model = Alloy.M("purchase", exports.definition, []);

collection = Alloy.C("purchase", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
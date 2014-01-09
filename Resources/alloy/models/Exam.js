exports.definition = {
    config: {
        columns: {
            type: "text",
            date: "text",
            length: "integer",
            location: "integer",
            time: "integer",
            progress: "integer",
            completed: "integer",
            started: "integer",
            score: "integer",
            block_a_score: "integer",
            block_a_num: "integer",
            block_b_score: "integer",
            block_b_num: "integer",
            block_c_score: "integer",
            block_c_num: "integer",
            block_d_score: "integer",
            block_d_num: "integer",
            block_e_score: "integer",
            block_e_num: "integer",
            block_f_score: "integer",
            block_f_num: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "exam"
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

model = Alloy.M("exam", exports.definition, []);

collection = Alloy.C("exam", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
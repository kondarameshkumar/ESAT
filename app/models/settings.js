exports.definition = {
	config: {
		columns: {
		    "timer": "integer",
		    "instant_feedback": "integer",
		    "question_set": "integer"
		},
		"defaults": {
            "timer": 3,
            "instant_feedback": 0,
            "question_set": 0
        },
		adapter: {
			type: "sql",
			collection_name: "settings"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}


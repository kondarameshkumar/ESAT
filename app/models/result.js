exports.definition = {
	config: {
		columns: {
		    "progress": "integer",
		    "score": "integer",
		    "num": "integer",
		    "date": "text",
		    "block_a_score": "integer",
		    "block_a_num": "integer",
		    "block_b_score": "integer",
		    "block_b_num": "integer",
		    "block_c_score": "integer",
		    "block_c_num": "integer",
		    "block_d_score": "integer",
		    "block_d_num": "integer",
		    "block_e_score": "integer",
		    "block_e_num": "integer",
		    "block_f_score": "integer",
		    "block_f_num": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "result"
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


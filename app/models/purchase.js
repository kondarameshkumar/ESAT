exports.definition = {
	config: {
		columns: {
		    "title": "text",
		    "description": "text",
		    "price": "text",
		    "productid": "text",
		    "appleid": "text",
		    "purchased": "integer",
		    "date_purchased": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "purchase"
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
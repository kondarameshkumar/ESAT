exports.definition = {
	config: {
		columns: {
			"exam_id": "integer",
			"number": "integer",
		    "id": "integer",
		    "block":"integer",
		    "question_txt": "text",
		    "option1": "text",
		    "option2": "text",
		    "option3": "text",
		    "option4": "text",
		    "answer": "text",
		    "reference": "text",
		    "figure": "text",
		    "selected":"integer",
		    "submitted":"integer",
		    "inReview":"integer"
		},
		adapter: {
			type: "sql",
			collection_name: "question"
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
			deleteAll : function(exam_id) {
 
                var collection = this;
 				Ti.API.info("exam_id: "+ exam_id);
                var sql = "DELETE FROM " + collection.config.adapter.collection_name + " WHERE exam_id = ?";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var rows = db.execute('SELECT * FROM ' + collection.config.adapter.collection_name);
                db.execute(sql,exam_id);
                
 				while (rows.isValidRow())
				{
				  Ti.API.info('Question ---> exam_id: ' + rows.fieldByName('exam_id') + ', question_txt:' + rows.fieldByName('question_txt'));
				  rows.next();
				}
				rows.close();
				db.close();
                collection.trigger('sync');
 
            },
			comparator : function(question) {
                return question.get('number');
            }
		});
		
		return Collection;
	}
}


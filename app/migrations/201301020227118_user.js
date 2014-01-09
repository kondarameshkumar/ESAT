migration.up = function(db) {
	db.createTable({
		"columns": {
			"username":"text",
			"password":"text",
			"email":"text",
			"userRef":"integer",
			"firstName":"text",
			"lastName":"text",
			"address":"text",
			"city":"text",
			"state":"text",
			"postalCode":"text",
			"country":"text",
			"phoneNumber":"text",
			"lang":"text",
			"loggedIn":"integer",
			"loggedInSince":"text"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "user"
		}
	});
};

migration.down = function(db) {
	db.dropTable("user");
};

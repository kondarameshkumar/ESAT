var TiParse = require("tiparse")();
//var Cloud = require('ti.cloud');
var moment = require('alloy/moment');

exports.definition = {
	
	config: {
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
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
            login: function(email, password, _callback) {
            	if(Titanium.Network.online) {
            		var _this = this;
            		
					var xhr = Ti.Network.createHTTPClient({
					    onload: function(e) {
					        // function called in readyState DONE (4)
					        _callback(JSON.parse(this.responseText));
					    },
					    onerror: function(e) {
					        // function called in readyState DONE (4)
					        _callback('{"success":false,"error":"' + e.error + '"}');
					    },
					    ondatastream: function(e) {
					        // function called as data is downloaded
					        Ti.API.info('ondatastream called, readyState = '+this.readyState);
					    },
					    onsendstream: function(e) {
					        // function called as data is uploaded
					        Ti.API.info('onsendstream called, readyState = '+this.readyState);
					    },
					    onreadystatechange: function(e) {
					        switch(this.readyState) {
					            case 0:
					                // after HTTPClient declared, prior to open()
					                // though Ti won't actually report on this readyState
					                Ti.API.info('case 0, readyState = '+this.readyState);
					            break;
					            case 1:
					                // open() has been called, now is the time to set headers
					                Ti.API.info('case 1, readyState = '+this.readyState);
					            break;
					            case 2:
					                // headers received, xhr.status should be available now
					                Ti.API.info('case 2, readyState = '+this.readyState);
					            break;
					            case 3:
					                // data is being received, onsendstream/ondatastream being called now
					                Ti.API.info('case 3, readyState = '+this.readyState);
					            break;
					            case 4:
					                // done, onload or onerror should be called now
					                Ti.API.info('case 4, readyState = '+this.readyState);
					            break;
					        }
					    },
					    timeout:10000  /* in milliseconds */
					});
					xhr.open("POST","https://elearning.csa.ca/venda/users/RetrieveUser.php?email="+email+"&password="+Ti.Utils.base64encode(password));
					xhr.send();
				} else {
					if (_callback) {
						_callback('{"success":false,"error":"No Internet Connection"}');
					}
				}
            },
            sendAndSet: function(data) {
            	var _this = this;
            	//Appceleartor ACS
            	/*
            	Cloud.Users.login({
				    login: data['username'],
				    password: data['password']
				}, function (e) {
				    if (e.success) {
				        var user = e.users[0];
				        alert('Success:\n' +
				            'id: ' + user.id + '\n' +
				            'sessionId: ' + Cloud.sessionId + '\n' +
				            'first name: ' + user.first_name + '\n' +
				            'last name: ' + user.last_name);
				    } else {
				    	Ti.API.info('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    	Ti.API.info("The login failed.");
						Ti.API.info("Try signing up user");
				    	Cloud.Users.create({
						    email: data['email'],
						    username: data['username'],
						    first_name: data['firstName'],
						    last_name: data['lastName'],
						    password: data['password'],
						    password_confirmation: data['password']
						}, function (e) {
						    if (e.success) {
						        var user = e.users[0];
						        alert('Success:\n' +
						            'id: ' + user.id + '\n' +
						            'sessionId: ' + Cloud.sessionId + '\n' +
						            'first name: ' + user.first_name + '\n' +
						            'last name: ' + user.last_name);
						    } else {
						        alert('Error:\n' +
						            ((e.error && e.message) || JSON.stringify(e)));
						        Ti.API.info("The signup failed.");
								Ti.API.info("Try logging in with saved local password");
								Cloud.Users.login({
								    login: 'test@mycompany.com',
								    password: _this.get('password')
								}, function (e) {
								    if (e.success) {
								        var user = e.users[0];
								        alert('Success:\n' +
								            'id: ' + user.id + '\n' +
								            'sessionId: ' + Cloud.sessionId + '\n' +
								            'first name: ' + user.first_name + '\n' +
								            'last name: ' + user.last_name);
								    } else {
								        alert('Error:\n' +
								            ((e.error && e.message) || JSON.stringify(e)));
								    }
								});
						    }
						});
				    }
				});
				*/
            	//PARSE.COM
            	TiParse.User.logIn(data['username'], data['password'], {
            		success: function(user) {
            			Ti.API.info("The login succeeded.");
            			Ti.API.info("Try updating user");
            			for(var key in data){
				            var attrName = key;
				            var attrValue = data[key];
				            user.set(attrName, attrValue);
				        }
				        user.save();
					},
					error: function(user, error) {
						Ti.API.info("The login failed.");
						Ti.API.info("Try signing up user");
						for(var key in data){
				            var attrName = key;
				            var attrValue = data[key];
				            user.set(attrName, attrValue);
				        }
				        user.signUp(null, {
			            	success: function(user) {
			            		Ti.API.info("The signup succeeded.");
			            		Ti.API.info("Try logging in user");
						    	Parse.User.logIn(data['username'], data['password'], {
								  success: function(user) {
								  	Ti.API.info("The login succeeded.");
								  },
								  error: function(user, error) {
								    Ti.API.info("The login failed. Check error to see why.");
								  }
								});
							},
							error: function(user, error) {
								Ti.API.info("The signup failed.");
								Ti.API.info("Try logging in with saved local password");
								TiParse.User.logIn(data['username'], _this.get('password'), {
									success: function(user) {
										
										Ti.API.info("The login succeeded");
										Ti.API.info("Update user");
										for(var key in data){
								            var attrName = key;
								            var attrValue = data[key];
								            user.set(attrName, attrValue);
								        }
								        user.save();
									},
									error: function(user, error) {
										Ti.API.info("The login failed");
										Ti.API.info("User has most likely changed passwords and is using another device to log in");
									}
								});
							}
						});
					}
				});
				
		        this.set(data);
            },
            logout: function() {
                this.set({
                    loggedIn: 0,
                    loggedInSince: ''
                });
                this.save();
            },
            validateAuth: function() {
                if (this.get('loggedIn') === 1) {// && this.get('authKey') === AUTHKEY) {
                    return true;
                } else {
                    return false;
                }
            }
        });
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}
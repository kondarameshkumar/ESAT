var TiParse = require("tiparse")();

var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            username: "text",
            password: "text",
            email: "text",
            userRef: "integer",
            firstName: "text",
            lastName: "text",
            address: "text",
            city: "text",
            state: "text",
            postalCode: "text",
            country: "text",
            phoneNumber: "text",
            lang: "text",
            loggedIn: "integer",
            loggedInSince: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "user"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            login: function(email, password, _callback) {
                if (Titanium.Network.online) {
                    var xhr = Ti.Network.createHTTPClient({
                        onload: function() {
                            _callback(JSON.parse(this.responseText));
                        },
                        onerror: function(e) {
                            _callback('{"success":false,"error":"' + e.error + '"}');
                        },
                        ondatastream: function() {
                            Ti.API.info("ondatastream called, readyState = " + this.readyState);
                        },
                        onsendstream: function() {
                            Ti.API.info("onsendstream called, readyState = " + this.readyState);
                        },
                        onreadystatechange: function() {
                            switch (this.readyState) {
                              case 0:
                                Ti.API.info("case 0, readyState = " + this.readyState);
                                break;

                              case 1:
                                Ti.API.info("case 1, readyState = " + this.readyState);
                                break;

                              case 2:
                                Ti.API.info("case 2, readyState = " + this.readyState);
                                break;

                              case 3:
                                Ti.API.info("case 3, readyState = " + this.readyState);
                                break;

                              case 4:
                                Ti.API.info("case 4, readyState = " + this.readyState);
                            }
                        },
                        timeout: 1e4
                    });
                    xhr.open("POST", "https://elearning.csa.ca/venda/users/RetrieveUser.php?email=" + email + "&password=" + Ti.Utils.base64encode(password));
                    xhr.send();
                } else _callback && _callback('{"success":false,"error":"No Internet Connection"}');
            },
            sendAndSet: function(data) {
                var _this = this;
                TiParse.User.logIn(data["username"], data["password"], {
                    success: function(user) {
                        Ti.API.info("The login succeeded.");
                        Ti.API.info("Try updating user");
                        for (var key in data) {
                            var attrName = key;
                            var attrValue = data[key];
                            user.set(attrName, attrValue);
                        }
                        user.save();
                    },
                    error: function(user) {
                        Ti.API.info("The login failed.");
                        Ti.API.info("Try signing up user");
                        for (var key in data) {
                            var attrName = key;
                            var attrValue = data[key];
                            user.set(attrName, attrValue);
                        }
                        user.signUp(null, {
                            success: function() {
                                Ti.API.info("The signup succeeded.");
                                Ti.API.info("Try logging in user");
                                Parse.User.logIn(data["username"], data["password"], {
                                    success: function() {
                                        Ti.API.info("The login succeeded.");
                                    },
                                    error: function() {
                                        Ti.API.info("The login failed. Check error to see why.");
                                    }
                                });
                            },
                            error: function() {
                                Ti.API.info("The signup failed.");
                                Ti.API.info("Try logging in with saved local password");
                                TiParse.User.logIn(data["username"], _this.get("password"), {
                                    success: function(user) {
                                        Ti.API.info("The login succeeded");
                                        Ti.API.info("Update user");
                                        for (var key in data) {
                                            var attrName = key;
                                            var attrValue = data[key];
                                            user.set(attrName, attrValue);
                                        }
                                        user.save();
                                    },
                                    error: function() {
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
                    loggedInSince: ""
                });
                this.save();
            },
            validateAuth: function() {
                return 1 === this.get("loggedIn") ? true : false;
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user", exports.definition, [ function(migration) {
    migration.name = "user";
    migration.id = "201301020227118";
    migration.up = function(db) {
        db.createTable({
            columns: {
                username: "text",
                password: "text",
                email: "text",
                userRef: "integer",
                firstName: "text",
                lastName: "text",
                address: "text",
                city: "text",
                state: "text",
                postalCode: "text",
                country: "text",
                phoneNumber: "text",
                lang: "text",
                loggedIn: "integer",
                loggedInSince: "text"
            },
            adapter: {
                type: "sql",
                collection_name: "user"
            }
        });
    };
    migration.down = function(db) {
        db.dropTable("user");
    };
} ]);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
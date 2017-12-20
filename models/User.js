var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	username: {
		type: String, 
		trim: true,
		unique: true,
		required: "User needs username"
	},
	password: {
		type: String,
		required: "User needs password"
	}
	ranking: {
		type: Number
	}
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
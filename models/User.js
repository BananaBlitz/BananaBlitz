var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema ({
	username: {
		type: String, 
		trim: true,
		required: "User needs username"
	},
	password: {
		type: String,
		required: "User needs password"
	},
	ranking: {  
		type: Number
	},
	created: {
		type: Date,
		default: Date.now()
	}
});

// Generates Hash
UserSchema.methods.generateHash = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = password => {
	return bcrypt.compareSync(password, this.password);
}


var User = mongoose.model("User", UserSchema);
module.exports = User; 
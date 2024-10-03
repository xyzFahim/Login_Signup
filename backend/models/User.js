const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");


const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Static signup method
UserSchema.statics.signup = async function (email, password) {
    // Validator
    if (!email || !password) { 
        throw Error("Please provide email and password");
    }
    if (!validator.isEmail(email)) { 
        throw Error("Invalid email");
    }
    if (!validator.isStrongPassword(password)) { 
        throw Error("Password is not strong");
    }

	const exists = await this.findOne({ email });

	// Check if the user already exists
	if (exists) {
		throw Error("Email already exists");
	}

	// Hash the password
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	// Create a new user with the hashed password
	const user = await this.create({ email, password: hash });

	return user;
};

module.exports = mongoose.model("User", UserSchema);

const User = require("../models/User");
const jwt = require("jsonwebtoken");

// login user
const loginUser = async (req, res) => {
	res.json({ Message: "Log In User" });
};

// signup user
const signupUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Call the static signup method
		const user = await User.signup(email, password);

        //Generate a jwt token
       const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'})

		// Return the email and user data in an object
		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { loginUser, signupUser };

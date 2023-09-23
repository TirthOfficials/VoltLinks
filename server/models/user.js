const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
mongoose.set('strictQuery', false);
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true, unique: true },
	lastName: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user1", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		
	});
	
	return schema.validate(data);
};

module.exports = { User, validate };

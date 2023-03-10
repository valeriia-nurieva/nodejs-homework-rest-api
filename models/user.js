const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
    {
        name: {
        type: String,
        required: true,
    },
        password: {
            type: String,
            required: [true, 'Set password for user'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        token: {
            type: String,
            default: "",
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter"
        },
    }, {versionKey: false, timestamps: true}
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

const userSchemas = {
    registerSchema,
    loginSchema
}

const User = model("user", userSchema);

module.exports = {
    User,
    userSchemas
}
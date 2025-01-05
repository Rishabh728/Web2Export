const Joi = require("joi");
const { CustomMessages } = require("../helper/statusCode");
// const { joi } = require("joi-sequelize/lib/functions");


const signupValidation = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "string.empty": "Full name is required." }),
  
  email: Joi.string()
    .required()
    .email()
    .messages({
      "string.empty": "Email address is required.",
      "string.email": "Please provide a valid email address.",
    }),

  password: Joi.string()
    .required()
    .min(8)
    .messages({
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 8 characters long.",
    }),

  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Password and Confirm Password must match.",
      "string.empty": "Confirm Password is required.",
    }),

  phoneNumber: Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Phone Number must be 10 digits.",
    }),

  country: Joi.string()
    .required()
    .messages({ "string.empty": "Country is required." }),

  state: Joi.string()
    .required()
    .messages({ "string.empty": "State is required." }),

  city: Joi.string()
    .required()
    .messages({ "string.empty": "City is required." }),

  company: Joi.string()
    .required()
    .messages({ "string.empty": "Company is required." }),

  userType: Joi.string()
    .valid("Seller", "Buyer")
    .required()
    .messages({
      "string.empty": "You must select a role (Seller or Buyer).",
      "any.only": "Invalid role. Must be either Seller or Buyer.",
    }),

  terms: Joi.boolean()
    .valid(true)
    .required()
    .messages({ "any.only": "You must agree to the terms and conditions." }),
});

module.exports = signupValidation;

const completeProfileValidation = Joi.object({
    about: Joi.string().required(),
    mobile_number: Joi.string().required(),
    facebook_url: Joi.string().optional(),
    linkedin_url: Joi.string().optional(),
    twitter_url: Joi.string().optional(),
    website: Joi.string().required(),
    userId:Joi.number().integer().required(),
});


const forgetPasswordValidation = Joi.object({
    password: Joi.string().required(),
    confirm_password: Joi.valid(Joi.ref("password")).required().error(new Error("PASSWORD AND CONFIRM PASSWORD SHOULD BE MATCH.")),
    forget_password_token: Joi.string().required()
})

let changePasswordValidation = Joi.object({
    password: Joi.string().required(),
    confirm_password: Joi.valid(Joi.ref("password")).required().error(new Error("PASSWORD AND CONFIRM PASSWORD SHOULD BE MATCH.")),
    current_password: Joi.string().required()
})


const updateProfileValidator = Joi.object({
    email:Joi.string().optional().email(),
    mobile_number: Joi.string().optional(),
    name: Joi.string().optional(),
});

module.exports = {
    signupValidation, 
    completeProfileValidation,
    forgetPasswordValidation,
    changePasswordValidation,
    updateProfileValidator,
};

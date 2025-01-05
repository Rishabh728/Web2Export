const express = require("express");
const userRouter = express.Router();
const user_controller = require("../controllers/user/user.controller");
const { requireAuth } = require("../middlewares/auth.middleware");
const { profileImages } = require("../middlewares/uploadCoverImage.middleware");

/////////////////////////////////////// AUTH routes //////////////////////////////////////

userRouter.route("/register").post(user_controller.signUpUser);  
userRouter.route("/login").post(user_controller.userLogin);  
userRouter.route("/login/send/otp").post(user_controller.LoginSendOtp);  //resendOtp for login
userRouter.route("/login/otp/verify").post(user_controller.LoginVerifyOtp);  // Verify OTP
userRouter.route("/forget/password/send/otp").post(user_controller.forgetPasswordSendOtp);  // send OTP for forget password
userRouter.route("/forget/password/verify/otp").post(user_controller.forgetPasswordVerifyOtp);  // Verify OTP for forget password
userRouter.route("/forget/password/reset").post(user_controller.resetForgetPassword);  // Reset forget password


// profile 
userRouter.route("/profile").get(requireAuth, user_controller.getProfile);  
userRouter.route("/profile/update").patch(requireAuth, profileImages, user_controller.updateProfile);  // update profile

module.exports = {userRouter}
import {
  addToCart,
  buyNow,
  getProductData,
  placeCartOrder,
  removeFromCart,
  UserLogout,
  UserOtpForPass,
  UserOtpGenerate,
  UserSignin,
  UserSignup,
  UserUpdatePass,
} from "../controller/users_controller.js";
import validateRequest from "../../config/helpers/validateRequest.js";
import { addToCartValidate,
    buyNowValidate,
    placeCartOrderValidate,
    removeFromCartValidate,
    UserLogoutValidate, 
    UserOtpForPassValidate, 
    UserOtpGenerateValidate, 
    UserSigninValidate, 
    UserSignupValidate, 
    UserUpdatePassValidate 
} from "../../config/helpers/validators.js";

export const UserRoute = (router) => {
  // for user to signup generate otp
  router.post("/user/generateOtp",validateRequest(UserOtpGenerateValidate), UserOtpGenerate);

  router.post("/user/signup",validateRequest(UserSignupValidate),  UserSignup);

  router.post("/user/signin",validateRequest(UserSigninValidate), UserSignin);

  router.post("/user/logout",validateRequest(UserLogoutValidate), UserLogout);

  // for user to reset password generate otp
  router.post("/user/OTPforPass",validateRequest(UserOtpForPassValidate), UserOtpForPass);

  router.post("/user/updatePass",validateRequest(UserUpdatePassValidate), UserUpdatePass);

  router.post("/user/getProducts", getProductData);

  router.post("/user/addToCart",validateRequest(addToCartValidate), addToCart);

  router.post("/user/removeFromCart",validateRequest(removeFromCartValidate), removeFromCart);

  router.post("/user/placeCartOrder",validateRequest(placeCartOrderValidate), placeCartOrder);

  router.post("/user/buynow",validateRequest(buyNowValidate), buyNow);
};

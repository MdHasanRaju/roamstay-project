import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  useSignInWithApple,
  useSignInWithFacebook,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import GoogleLogin from "react-google-login";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toggleModal, userLoggedIn } from "../../features/auth/authSlice";
import AppleSignIn from "./AppleSignIn/AppleSignIn";
import FacebookSignIn from "./FacebookSignIn/FacebookSignIn";
import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";

const SocialLogin = () => {

  const dispatch = useDispatch();
  // const responseGoogle = (response) => {

  //   dispatch(
  //     userLoggedIn({
  //       accessToken: response.accessToken,
  //       user: response.profileObj,
  //     })
  //   );
    
  //   localStorage.setItem(
  //     "auth",
  //     JSON.stringify({
  //       accessToken: response.accessToken,
  //       user: response.profileObj,
  //     })
  //   );
  // };

  return (
    <div className="mt-10 flex flex-col gap-3">
      {/* <motion.button
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.3,
            type: "spring",
            stiffness: 200,
          },
        }}
        // onClick={() => signInWithApple()}
        className="flex items-center justify-center gap-2 rounded-full bg-white/10 py-2 font-semibold hover:bg-white/20"
      >
        <AiFillApple className="text-xl" />
        Continue with Apple
      </motion.button> */}
      {/* <AppleSignIn/> */}
      <GoogleSignIn/>
      <FacebookSignIn/>
      {/* <motion.button
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.7,
            duration: 0.3,
            type: "spring",
            stiffness: 200,
          },
        }}
        className="flex items-center justify-center gap-2 rounded-full bg-white/10 py-2 font-semibold hover:bg-white/20"
      >
        <FaFacebook className="text-xl" />
        Continue with Facebook
      </motion.button> */}
    </div>
  );
};

export default SocialLogin;

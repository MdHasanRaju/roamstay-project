import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../features/auth/authSlice";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const togglePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
      return;
    }
    setIsPasswordShown(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logged In", email, password);
  };

  // useEffect(() => {
  //   if (user) {
  //     // navigate(from, { replace: true });
  //     dispatch(toggleModal(false));
  //   }
  // }, [user, navigate, from, dispatch]);

  return (
    <form className="" onSubmit={!login ? handleRegisterSubmit : handleLogin}>
      <span className="table mx-auto mb-4">
        or{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => setLogin(!login)}
        >
          {login ? "login" : "register"}
        </span>
      </span>
      {login && (
        <motion.input
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
          onChange={(e) => setName(e.target.value)}
          whileFocus={{ boxShadow: "0px 0px 8px #fff" }}
          type="text"
          placeholder="Name"
          className="border border-[#F9EFE1] focus:border-[#F9EFE1] px-4 py-2 rounded-full bg-transparent focus:outline-none text-[#807A72] font-light placeholder:text-[#807A72] drop-shadow-sm mb-4 w-full"
        />
      )}
      <motion.input
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.3,
            type: "spring",
            stiffness: 200,
          },
        }}
        onChange={(e) => setEmail(e.target.value)}
        whileFocus={{ boxShadow: "0px 0px 8px #fff" }}
        type="text"
        placeholder="Email"
        className="border border-[#F9EFE1] focus:border-[#F9EFE1] px-4 py-2 rounded-full bg-transparent focus:outline-none text-[#807A72] font-light placeholder:text-[#807A72] drop-shadow-sm mb-4 w-full"
      />
      <div className="relative flex">
        <motion.input
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
          onChange={(e) => setPassword(e.target.value)}
          whileFocus={{ boxShadow: "0px 0px 8px #fff" }}
          type={isPasswordShown ? "text" : "password"}
          placeholder="Password"
          className="border border-[#F9EFE1] focus:border-[#F9EFE1] px-4 py-2 rounded-full bg-transparent focus:outline-none text-[#807A72] font-light placeholder:text-[#807A72] drop-shadow-sm w-full mb-4 "
        />
        {password !== "" ? !isPasswordShown ? (
          <AiFillEyeInvisible
            onClick={togglePasswordVisibility}
            // style={{ top: 35, right: 12 }}
            className="absolute top-[10px] text-[20px] right-[14px] cursor-pointer"
          />
        ) : (
          <AiFillEye
            onClick={togglePasswordVisibility}
            // style={{ top: 35, right: 12 }}
            className="absolute top-[10px] text-[20px] right-[14px] cursor-pointer"
          />
        ) : null}
      </div>
      {error !== "" && (
        <p className="text-center mb-4 text-[#FF3333]">{error}</p>
      )}
      <motion.button
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.9,
            duration: 0.3,
            type: "spring",
            stiffness: 200,
          },
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-[10px] px-[20px] text-white rounded-full font-semibold leading-[24px] text-[16px] bg-btnPrimary"
      >
        {login ? "Sign Up" : "Sign In"}
      </motion.button>
    </form>
  );
};

export default Signup;

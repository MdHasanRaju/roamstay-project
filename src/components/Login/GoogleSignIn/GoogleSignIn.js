import React from "react";
import { motion } from "framer-motion";
import { AiOutlineGoogle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleModal, userLoggedIn, userLoggedInType } from "../../../features/auth/authSlice";
import GoogleLogin from "react-google-login";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(
      userLoggedIn({
        accessToken: response.accessToken,
        user: response.profileObj,
      })
    );

    dispatch(userLoggedInType({ loginType:"google", isLoggedIn:true}));
    dispatch(toggleModal(false));

    localStorage.setItem(
      "auth",
      JSON.stringify({
        accessToken: response.accessToken,
        user: response.profileObj,
        loggedInType:"google"
      })
    );

    navigate(from, { replace: true });
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      render={(renderProps) => (
        <motion.button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
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
          className="flex items-center justify-center gap-2 rounded-full bg-white/10 py-2 font-semibold hover:bg-white/20"
        >
          <AiOutlineGoogle className="text-xl" />
          Continue with Google
        </motion.button>
      )}
    />
  );
};

export default GoogleSignIn;

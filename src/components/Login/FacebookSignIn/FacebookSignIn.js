import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../features/auth/authSelectors";
import {
  toggleModal,
  userLoggedIn,
  userLoggedInType,
} from "../../../features/auth/authSlice";
import { setLocalStorageAuth } from "../../../utils/setLocalStorageAuth";

const FacebookSignIn = () => {
  const auth = useSelector(authSelector);
  const { isLoggedIn, loginType } = auth;
  const dispatch = useDispatch();

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   expiresIn: 0,
  //   acessToken: "",
  //   picture: {},
  // });

  const responseFacebook = async (res) => {
    const response = await res;
    console.log(response.status);
    if (response?.email) {
      // setUser({
      //   name: response?.name,
      //   email: response?.email,
      //   expiresIn: response?.name,
      //   picture: response?.picture?.data,
      // });
      const user = {
        name: response?.name,
        email: response?.email,
        expiresIn: response?.name,
        picture: response?.picture?.data,
      };

      dispatch(userLoggedInType({ loginType: "facebook", isLoggedIn: true }));
      dispatch(userLoggedIn({ user: user, accessToken: response.accessToken }));

      setLocalStorageAuth({
        accessToken: response.accessToken,
        user: user,
        loggedInType: "facebook",
      });

       dispatch(toggleModal(false));
      console.log(response);
    } else {
      dispatch(userLoggedInType({ loginType: "facebook", isLoggedIn: false }));
    }
  };

  console.log(isLoggedIn, loginType);

  // decide what to render
  let content;

  if (isLoggedIn) {
    content = (
      <motion.button
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
      </motion.button>
    );
  } else {
    content = (
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <motion.button
            onClick={renderProps.onClick}
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
          </motion.button>
        )}
      />
    );
  }

  return content;
};

export default FacebookSignIn;

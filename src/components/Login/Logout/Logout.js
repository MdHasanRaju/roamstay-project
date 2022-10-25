import React from 'react';
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from 'react-redux';
import { header } from '../../../animations/headerAnimations';
import { userLoggedOut } from '../../../features/auth/authSlice';
import { motion } from "framer-motion";
import { authSelector } from '../../../features/auth/authSelectors';

const Logout = () => {
    
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)
    const {isLoggedIn, loginType} = auth
    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear()
    }

    const fbLogout = () => {
      window.FB.logout();
      dispatch(userLoggedOut());
      localStorage.clear();
    }

    // decide what to render
    let content = null
    if ((isLoggedIn === true) && (loginType === "facebook")) {
      content = (
        <motion.span
          onClick={fbLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={header}
          className="mr-4 border px-4 py-1 rounded-full cursor-pointer"
        >
          Logout
        </motion.span>
      );
    }else{
      content = <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
        render={(renderProps) => (
          <motion.span
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={header}
            className="mr-4 border px-4 py-1 rounded-full cursor-pointer"
          >
            Logout
          </motion.span>
        )}
      ></GoogleLogout>
    }

    return content;
};

export default Logout;
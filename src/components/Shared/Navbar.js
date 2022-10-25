import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconContext } from "react-icons";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { header, stagger } from "../../animations/headerAnimations";
import whiteLogo from "../../assets/images/logo-white.png";
import { toggleModal } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import Logout from "../Login/Logout/Logout";
import SocialLogin from "../Login/SocialLogin";
import Signup from "../Signup/Signup";
import Modal from "../ui/Modal";

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const dispatch = useDispatch();

  // toggle mobile menu
  const handleMenuOpen = () => {
    setMobileMenu(!mobileMenu);
  };

  // toggle to expand languages
  const handleLanguageOpen = () => {
    setLanguageOpen(!languageOpen);
  };

  let activeClassName = "underline";
  const rotatateStyle = {
    transform: languageOpen ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };

  // Scroll Effect
  const controlNav = () => {
    if (window.scrollY > 570) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  // Get current loggedIn user
  const user = useAuth()

  return (
    <motion.header className="w-screen" initial="hidden" animate={"visible"}>
      <motion.nav
        variants={stagger}
        className={`${
          show ? "bg-transparent " : "bg-dark"
        }  w-full top-0 transition-all duration-100 z-40 fixed`}
      >
        <div className="container mx-auto py-6 px-5 md:px-0">
          <div className="flex justify-between">
            <div className="logo w-[20%]">
              <motion.div variants={header}>
                <Link to={"/"}>
                  <img src={whiteLogo} alt={"Logo"} />
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={stagger}
              className="hidden md:flex justify-end w-[50%] items-center"
            >
              <ul className="menu flex text-white">
                <motion.li variants={header} className="mr-[60px]">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </motion.li>
                <motion.li variants={header} className="mr-[60px]">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    to={"/locations"}
                  >
                    Locations
                  </NavLink>
                </motion.li>
                <motion.li variants={header} className="mr-[60px]">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={stagger}
              className="hidden md:flex justify-center lg:justify-center text-white items-center ml-6 w-[30%]"
            >
              {user ? (
                <Logout/>
              ) : (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={header}
                  onClick={() => dispatch(toggleModal(true))}
                  className="mr-4 border px-4 py-1 rounded-full cursor-pointer"
                >
                  Sign In
                </motion.span>
              )}
              <motion.div
                variants={header}
                onClick={handleLanguageOpen}
                className="cursor-pointer relative"
              >
                <i className="fa-solid fa-globe mr-2 w-[16px] h-[16px]"></i>
                <span>
                  <i
                    style={rotatateStyle}
                    className="fa-solid fa-angle-up w-[16px] h-[16px]"
                  ></i>
                </span>
                {languageOpen && (
                  <ul className="absolute py-1 pr-2">
                    <li className="mb-1">Thai</li>
                    <li className="">English</li>
                  </ul>
                )}
              </motion.div>
            </motion.div>
            <IconContext.Provider
              value={{
                className: "text-white cursor-pointer inline-block md:hidden",
              }}
            >
              <div onClick={handleMenuOpen}>
                {mobileMenu ? <HiX /> : <HiMenuAlt1 />}
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </motion.nav>
      <nav
        className={` transition-all z-30 flex items-center h-screen${
          mobileMenu
            ? "opacity-100 visible border-t border-white"
            : "opacity-0 invisible"
        }`}
      >
        <div className="mobile-menu ">
          <ul className="fixed w-full text-center bg-dark h-screen text-white flex flex-col justify-center pt-10 z-30">
            <li className="py-4">
              <Link to={"/products"}>Products</Link>
            </li>
            <li className="py-4">
              <Link to={"/locations"}>Locations</Link>
            </li>
            <li className="py-4">
              <Link to={"/reservation"}>Reservation</Link>
            </li>
            <li className="py-4">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="py-4">
              {user?.uid ? (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border px-4 py-0.5 transition-colors cursor-pointer border-white/50 hover:border-white/70"
                >
                  Logout
                </motion.span>
              ) : (
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(toggleModal(true))}
                  className="rounded-full border px-4 py-0.5 transition-colors cursor-pointer border-white/50 hover:border-white/70"
                >
                  Sign In
                </motion.span>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Modal>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.3,
            },
          }}
          className="text-center text-2xl font-extrabold mb-4"
        >
          Sign up or log in to continue
        </motion.h2>
        <div className="mb-4">{!openSignUp ? <SocialLogin /> : <Signup />}</div>
        <div
          onClick={() => setOpenSignUp(!openSignUp)}
          className="mt-10 text-center underline cursor-pointer"
        >
          {openSignUp ? "Continue with Social Account" : "Continue with Email"}
        </div>
      </Modal>
    </motion.header>
  );
};

export default Navbar;

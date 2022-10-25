import React from "react";
import bedRoom from "./../../assets/images/bedroom.png";
import logo from "./../../assets/images/logo-white.png";
import appStore from "./../../assets/images/DownloadButtonAppStore.png";
import playStore from "./../../assets/images/DownloadButtonPlayStore.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { footerContainer, footerItem } from "../../animations/footerAnimations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${bedRoom})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen flex items-center"
    >
      <div className="container mx-auto py-10 md:py-20">
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center md:text-left md:text-[16px] leading-[28px]"
        >
          <motion.ul variants={footerItem} className="col-1">
            <li className="mb-4 ">
              <Link to={"/"}>
                <img className="inline-block" src={logo} alt="Logo" />
              </Link>
            </li>
            <li className="mb-4">
              <a href="mailto:reservations@roamstay.com">
                reservations@roamstay.com
              </a>
            </li>
            <li className="mb-4 flex justify-center md:justify-start">
              <motion.a whileHover={{scale:1.10}}  href="/#" target={"_blank"} className="mr-4 inline-block">
                <FaTwitter className="text-[20px] inline-block" />
              </motion.a>
              <motion.a whileHover={{scale:1.10}}  href="/#" target={"_blank"} className="mr-4 inline-block">
                <FaInstagram className="text-[20px] inline-block" />
              </motion.a>
              <motion.a whileHover={{scale:1.10}}  href="/#" target={"_blank"} className="inline-block">
                <FaFacebook className="text-[20px] inline-block" />
              </motion.a>
            </li>
          </motion.ul>
          <motion.ul variants={footerItem} className="col-2">
            <li className="mb-4 tracking-[0.16em]">Company</li>
            <li className="mb-4">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mb-4">
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li className="mb-4">
              <Link to={"/blog"}>Blog</Link>
            </li>
          </motion.ul>
          <motion.ul variants={footerItem} className="col-3">
            <li className="mb-4 tracking-[0.16em]">LEGAL</li>
            <li className="mb-4">
              <Link to={"/terms"}>Terms of services</Link>
            </li>
            <li className="mb-4">
              <Link to={"/privacy"}>privacy policies</Link>
            </li>
            <li className="mb-4">
              <Link to={"/copyright"}>Copyright</Link>
            </li>
          </motion.ul>
          <motion.ul variants={footerItem} className="col-4">
            <li className="mb-4 tracking-[0.16em]">Keep Roam</li>
            <li className="mb-4">
              <Link to={"/appstor"}>
                <img className="inline-block" src={appStore} alt="App Store" />
              </Link>
            </li>
            <li className="mb-4">
              <Link to={"/playstore"}>
                <img
                  className="inline-block"
                  src={playStore}
                  alt="Google Play Store"
                />
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

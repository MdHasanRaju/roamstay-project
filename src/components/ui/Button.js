import { motion } from "framer-motion";
import React from "react";
import { btnGroup } from "../../animations/bannerAnimations";

const Button = ({ children, type = "", custom = "" }) => {
  let bgColor = "";
  if (type === "primary") {
    bgColor = "bg-btnPrimary";
  } else if (type === "secondary") {
    bgColor = "bg-btnSecondary";
  }

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={btnGroup}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${bgColor} py-[10px] px-[20px] text-white rounded-full font-semibold leading-[24px] text-[16px] ${custom}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;

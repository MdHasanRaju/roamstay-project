import { motion } from "framer-motion";
import React from "react";
import { subscriptionContainer, subscriptionItem } from "../../animations/subscriptionAnimations";

const Subscription = () => {
  return (
    <motion.section
      variants={subscriptionContainer}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="login bg-dark w-screen flex items-center"
    >
      <div className="py-10 container mx-auto px-5">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-[50%] lg:w-[35%]">
            <motion.h2
              variants={subscriptionItem}
              className="text-[30px] text-center md:text-left md:text-[30px] lg:text-[40px] leading-[41px] text-white mb-[12px]"
            >
              Stay in the loop
            </motion.h2>
            <motion.p
              variants={subscriptionItem}
              className="font-playfairDisplay text-center md:text-left mb-5 md:mb-0 font-normal text-[16px] leading-[32px] text-[#F9EFE1]"
            >
              Keep up with our featured homes, new locations, and travel tips!
              Oh, and get $100 off your first stay with us.
            </motion.p>
          </div>
          <form className="w-full md:w-[50%] lg:w-[60%]">
            <div className="flex flex-col lg:flex-row justify-around items-center h-full">
              <motion.input
                whileFocus={{ boxShadow: "0px 0px 8px #fff" }}
                variants={subscriptionItem}
                type="text"
                placeholder="First Name"
                className="border border-[#F9EFE1] focus:border-[#F9EFE1] px-4 py-2 rounded-full bg-transparent focus:outline-none text-[#807A72] font-light placeholder:text-[#807A72] drop-shadow-sm mb-4 lg:mb-0 w-full md:w-auto lg:w-[35%]"
              />
              <motion.input
                whileFocus={{ boxShadow: "0px 0px 8px #fff" }}
                variants={subscriptionItem}
                type="text"
                placeholder="Email"
                className="border border-[#F9EFE1] focus:border-[#F9EFE1] px-4 py-2 rounded-full bg-transparent focus:outline-none text-[#807A72] font-light placeholder:text-[#807A72] drop-shadow-sm w-full md:w-auto mb-4 lg:mb-0 lg:w-[35%]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={subscriptionItem}
                className="w-full md:w-auto py-[10px] px-[20px] text-white rounded-full font-semibold leading-[24px] text-[16px] bg-btnPrimary lg:w-[20%]"
              >
                Sign Up
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Subscription;

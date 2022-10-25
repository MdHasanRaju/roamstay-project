import { motion } from "framer-motion";
import React from 'react';
import { testimonialItem } from '../../animations/testimonialAnimations';

const Testimonial = () => {
  return (
    <motion.div
      variants={testimonialItem}
      className={`testimonial w-[100%] h-auto  rounded-br-[100px] bg-[#ffffff] py-[46px] px-[32px]`}
    >
      <p className="text-textPrimary font-playfairDisplay text-center md:text-left text-[20px] leading-[32px] mb-[16px]">
        “I had wonderful stay and was blown away by the thougful design and
        functionality of the apartment.”
      </p>
      <div className="text-center md:text-left">
        <span className="text-[14px] text-textPrimary leading-[24px] block font-inter font-normal">
          Dorothy Harrington
        </span>
        <span className="text-[14px] block text-textPrimary leading-[24px] font-inter font-light">
          Greece
        </span>
      </div>
    </motion.div>
  );
};

export default Testimonial;
import React from "react";
import drawingRoom from "./../../assets/images/drawingRoom.png";
import { motion } from "framer-motion";
import { discountContainer, discountItem, discountRight } from "../../animations/discountAnimations";

const Discount = () => {
  return (
    <section>
      <motion.div
        variants={discountContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row min-h-screen w-screen"
      >
        <div className="w-full md:w-1/2 p-5 md:8 lg:p-28 bg-[#F5F4F3CC]">
          <motion.h2
            variants={discountItem}
            className="text-[30px] text-center md:text-left md:text-[50px] leading-[51px] mb-[24px] "
          >
            Stay longer and save
          </motion.h2>
          <motion.p
            variants={discountItem}
            className="text-[#7A7A7A] mb-[32px] text-center md:text-left"
          >
            Timeless boutique traveling experiences are hard to come by. Indulge
            and save more as you stay longer in your home away from home.
          </motion.p>
          <div className="flex justify-between">
            <motion.div
              variants={discountItem}
              className="discount-left p-5 w-[45%] bg-[#FAFAFA] border border-[#00000014] rounded-lg"
            >
              <div className="circle bg-[#31BE9C] w-[16px] h-[16px] rounded-full mb-[16px]"></div>
              <h2 className=" text-textPrimary text-[32px] font-semibold font-playfairDisplay leading-[40px] mb-1">
                20%
              </h2>
              <p className="leading-[22px] text-[15px] text-[#A5A5A5]">
                7+ Nights
              </p>
            </motion.div>
            <motion.div
              variants={discountItem}
              className="discount-right p-5 w-[45%] bg-[#FAFAFA] border border-[#00000014] rounded-lg"
            >
              <div className="circle bg-[#DE7B17] w-[16px] h-[16px] rounded-full mb-[16px]"></div>
              <h2 className="text-textPrimary text-[32px] font-semibold font-playfairDisplay leading-[40px] mb-1">
                30%
              </h2>
              <p className="leading-[22px] text-[15px] text-[#A5A5A5]">
                21+ Nights
              </p>
            </motion.div>
          </div>
          <motion.p
            variants={discountItem}
            className="text-[15px] leading-[22px] text-[#7A7A7A] mt-[32px] text-center md:text-left"
          >
            To visit an apartment or learn more, contact us. * Discount on
            nightly rate. Terms and conditions apply
          </motion.p>
        </div>
        <motion.div
          variants={discountRight}
          className="w-full mt-[30px] md:mt-0 md:w-1/2 h-[400px] md:h-auto"
          style={{
            backgroundImage: `url(${drawingRoom})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Discount;

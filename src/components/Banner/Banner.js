import { motion } from "framer-motion";
import React from "react";
import {
  bannerContainer,
  bannerItem,
  playButton,
} from "../../animations/bannerAnimations";
import { fadeInDown } from "../../animations/FadeIn/fadeInDown";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import bannerImg from "./../../assets/images/banner-img.png";

const Banner = () => {

  return (
    <motion.section
      variants={bannerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        backgroundImage: `url('${bannerImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`h-screen w-screen`}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center h-screen justify-evenly lg:justify-between">
          <div className="banner-left w-full lg:w-[60%] xl:w-1/2">
            <motion.h1
              variants={bannerItem}
              className="w-[100%] text-[50px] md:text-[66px] leading-[63px] md:leading-[80px] text-white font-normal font-gurmukhi mb-[33px]"
            >
              Discover your comfy place
            </motion.h1>
            <motion.p
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              className="text-textColor w-full md:w-[463px] text-sm md:text-lg  font-normal mb-[43px]"
            >
              Live the way you want to in trendy neighborhoods through our
              handpicked tech-enabled homes.
            </motion.p>
            <motion.div
              variants={bannerItem}
              className="flex flex-col md:flex-row"
            >
              <Button type="primary">Download the Mobile App</Button>
              <Button type="secondary" custom="ml-0 mt-7 md:mt-0 md:ml-[25px]">
                Find the ultimate Roam
              </Button>
            </motion.div>
          </div>
          <motion.div
            variants={playButton}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="banner-right w-full lg:w-[40%] xl:w-1/2"
          >
            <div className="flex justify-center items-center">
              <div className="icon bg-white w-[52px] h-[52px] rounded-full text-center cursor-pointer transition duration-300 ease-in-out hover:shadow-[1px_0_31px_#ffffffd6]">
                <i className="fa-solid fa-play text-[#020101] leading-[53px] w-[19px] h-[21px]"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <Modal modalCls="w-1/2"  xButton={false}>
        <div className="flex flex-col pt-16 justify-center pr-28">
        <h2 className="text-3xl font-semibold mb-2 ">Already have a reservation?</h2>
        <p className="text-sm font-medium">If you made your reservation on Airbnb or any third-party booking site, any sync your reservation code with your Casai account to unlock exclusive Casai app features. If your booked through casai.com you are all set! no need to link your reservation. You must have a Casai account to continue.</p>
        <input className="w-full bg-[#141412] mt-[40px] mb-[15px] p-3" type="text" placeholder="Booking confirmation code:" />
        <button className="bg-[#955fd8] text-[#D3D3D3] font-semibold px-[0px] py-3 w-[45%] mb-[25px] rounded-full">Link my Reservation</button>
        <span>Contact us if you need help</span>
        </div>
      </Modal> */}
    </motion.section>
  );
};

export default Banner;

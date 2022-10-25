import React from "react";
import frameImg from "./../../assets/images/frame.png";
import phoneImg from "./../../assets/images/phone.png";
import { motion } from "framer-motion";
import { container, item, phoneVariants } from "../../animations/servicesAnimations";
import { fadeInUp } from "../../animations/FadeIn/fadeInUp";
import { FaFingerprint } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { CgDollar } from "react-icons/cg";


const Services = () => {
  return (
    <motion.section
      className="services min-h-screen w-screen bg-[#F5F4F3]"
      viewport={{ once: true }}
    >
      <div className="pt-12">
        <motion.h2
          initial="hidden"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-[25px] leading-8 md:leading-[45px] md:text-[50px] w-[100%] md:w-[896px] mx-auto mb-[50px]"
        >
          Ultimate working while traveling in style is just a tap away.
        </motion.h2>
        <motion.div
          className="text-center"
          variants={phoneVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img className="inline-block mb-[-190px]" src={phoneImg} alt="" />
        </motion.div>
        <div
          className="h-auto lg:h-[464px] pt-[250px] lg:pt-0 pb-[30px] md:pb-[70px]"
          style={{
            backgroundImage: `url(${frameImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto h-full px-5 md:px-16 flex items-end">
            <motion.div
              className="w-full justify-between items-center"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                <motion.div
                  variants={item}
                  className="service flex items-stretch mb-6 md:mb-4 w-full lg:w-[100%] md:w-[280px] lg:mb-0"
                >
                  <div className="flex items-start">
                    <div className="icon mr-4 mt-1">
                      <FiStar className="text-[18px] text-white" />
                    </div>
                    <div className="content">
                      <h3 className="text-xl font-semibold text-white mb-[13px]">
                        Hand-crafted Properties
                      </h3>
                      <p className="text-sm text-[#A5A5A5]">
                        Roam operates a network of funtionally designed, smart
                        homes in your favorite neighborhoods.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="service flex items-stretch mb-6 md:mb-4 w-full lg:w-[100%] md:w-[280px] lg:mb-0"
                >
                  <div className="flex items-start">
                    <div className="icon mr-4 mt-1">
                      <FaFingerprint className="text-[18px] text-white" />
                    </div>
                    <div className="content">
                      <h3 className="text-xl font-semibold text-white mb-[13px]">
                        Consistent Simplicity
                      </h3>
                      <p className="text-sm text-[#A5A5A5]">
                        From opening the door to reliable wifi to accessing our
                        staff - we are here for you in the palm of your hands.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  className="service flex items-stretch  w-full lg:w-[100%] md:w-[280px] lg:mb-0"
                >
                  <div className="flex items-start">
                    <div className="icon mr-4 mt-1">
                      <CgDollar className="text-[20px] text-white" />
                    </div>
                    <div className="content">
                      <h3 className="text-xl font-semibold text-white mb-[13px]">
                        Realistic Representation
                      </h3>
                      <p className="text-sm text-[#A5A5A5]">
                        360 immersive enivronment and unparalleled virtual
                        experience to interact with each property before you
                        stay.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

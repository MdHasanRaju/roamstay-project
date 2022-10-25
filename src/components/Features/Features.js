import React from "react";
import { features } from "../../data/features";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/FadeIn/fadeInUp";
import { featuresContainer, featuresItem } from "../../animations/featuresAnimations";

const Features = () => {
  return (
    <motion.section
      variants={featuresContainer}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="features min-h-screen w-screen"
    >
      <div className="py-10 px-5 md:py-20 container mx-auto">
        <motion.h2
          variants={featuresItem}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-center mb-12 text-3xl md:text-5xl"
        >
          A new way to roam
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
          {features.map((feature) => {
            const { id, img, name, text } = feature;
            return (
              <motion.div
                variants={featuresItem}
                key={id}
                className="feature mb-10 md:mb-0 text-center w-full xl:w-[285px]"
              >
                <img
                  key={id}
                  className="w-full xl:w-[285px] h-[280px]"
                  src={img}
                  alt=""
                />
                <div className="content">
                  <h3 className="text-2xl mt-5 font-medium mb-3">{name}</h3>
                  <p className="text-sm text-textPrimary font-light leading-6">
                    {text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;

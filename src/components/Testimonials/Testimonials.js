import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Testimonial";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonials.css";
import {motion} from "framer-motion"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import { testimonialContainer, testimonialItem } from "../../animations/testimonialAnimations";


const Testimonials = () => {

  return (
    <motion.section
      variants={testimonialContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="testimonials bg-[#A4597E]  flex flex-col justify-center testimonial-shadow"
    >
      <div className="py-[60px] px-5 md:px-0 h-full">
        <motion.h2
          variants={testimonialItem}
          className="text-[30px] md:text-[50px] leading-[51px] text-white text-center mb-[52px]"
        >
          A stay worth sharing
        </motion.h2>
        <div className="w-full relative">
          <Swiper
            allowTouchMove={true}
            autoplay={true}
            loop={true}
            navigation={{
              clickable: true,
              // prevEl: ".prev",
              // nextEl: ".next",
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            // Responsive Breakpoints
            breakpoints={{
              0: {
                // width: 0,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              1024: {
                // width: 1024,
                slidesPerView: 3,
              },
              1700: {
                // width: 1024,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              {({ isActive }) => <Testimonial isActive={isActive} />}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <Testimonial isActive={isActive} />}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <Testimonial isActive={isActive} />}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <Testimonial isActive={isActive} />}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <Testimonial isActive={isActive} />}
            </SwiperSlide>
          </Swiper>
          {/* Navigation */}
          {/* <div className="prev absolute top-[88px] left-[416px] z-20">
            <HiChevronLeft className="text-white w-[25px] h-[25px] bg-[#212121] rounded-full cursor-pointer" />
          </div>
          <div className="next absolute top-[88px] right-[416px] z-20">
            <HiChevronRight className="text-white w-[25px] h-[25px] bg-[#212121] rounded-full cursor-pointer" />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;

export const testimonialContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const testimonialItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale:0
  },
  visible: {
    opacity: 1,
    y: 0,
    scale:1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

export const footerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const footerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const discountRight = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "0%",
    transition: {
      delay: .3,
      duration: .7,
    },
  },
};

export const discountContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const discountItem = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

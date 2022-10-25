// let easeing = [0.6, -0.05, 0.01, 0.99];

export const container = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const item = {
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


export const phoneVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};

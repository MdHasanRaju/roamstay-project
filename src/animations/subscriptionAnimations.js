export const subscriptionContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const subscriptionItem = {
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

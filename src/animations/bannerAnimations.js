let easing = [0.6, -0.05, 0.01, 0.99];
export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


export const firstName = {
  hidden: {
    y: -20,
  },
  visible: {
    y: 0,
    transition: {
      deleyChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const lastName = {
  hidden: {
    y: -20,
  },
  visible: {
    y: 0,
    transition: {
      deleyChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const letter = {
  hidden: {
    y: 400,
  },
  visible: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export const btnGroup = {
  hidden: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  visible: {
    y: 0,
    opacity:1,
    animation: { duration: 1, ...transition },
  },
};

export const playButton = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "0%",
    transition: {
      delay: 0.3,
      duration: 0.7,
      type:"spring",
      stiffness:100
    },
  },
};

export const bannerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const bannerItem = {
  hidden: {
    opacity: 0,
    y: 40,
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

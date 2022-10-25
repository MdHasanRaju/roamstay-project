let easeing = [0.6, -0.05, 0.01, 0.99];
export const transition = { duration: 1.4, ease: [0.6, -0.05, 0.01, 0.9] };

export const stagger = {
  visible: {
    transition: {
      deleyChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const header = {
  hidden: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  visible: {
    y: 0,
    opacity: 1,
    animation: { duration: 1, ...transition },
  },
};

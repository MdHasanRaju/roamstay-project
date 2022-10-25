let easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInDown = {
  hidden: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easing,
    },
  },
};

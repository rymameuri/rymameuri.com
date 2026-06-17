export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpTransition = {
  duration: 0.6,
  ease: easeOut,
};

export const heroWordTransition = {
  duration: 0.8,
  ease: easeOut,
};

export const viewportConfig = {
  once: true,
  margin: "-100px" as const,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

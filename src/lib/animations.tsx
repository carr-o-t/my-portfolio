import { Variants } from "framer-motion";

export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
};

export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slideUpText = {
  initial: {
    y: "100%",
  },
  enter: {
    y: "100%",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

export const textRevealMotion = (
  delay: number,
  dir: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop"
) => {
  switch (dir) {
    case "rightToLeft":
      return {
        initial: { x: 100, opacity: 0 },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: easings.easeOutQuart,
          },
        },
      };
    case "leftToRight":
      return {
        initial: { x: -100, opacity: 0 },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: easings.easeOutQuart,
          },
        },
      };
    case "topToBottom":
      return {
        initial: { y: -100, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: easings.easeOutQuart,
          },
        },
      };
    case "bottomToTop":
      return {
        initial: { y: 100, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay,
            duration: 0.8,
            ease: easings.easeOutQuart,
          },
        },
      };
  }
};

// For NavMenuItem component

export const itemCoverMotion = {
  initial: {
    height: "100%",
  },
  animate: {
    height: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: easings.easeInOutQuint,
    },
  },
};

export const dividerMotion = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: easings.easeInOutQuint,
    },
  },
};

export const itemContentMotion = {
  hover: {
    width: "5ch",
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
};

export const arrowMotion = {
  hover: {
    rotate: -90,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
};

export const revealOnScroll = (
  delay: number,
  dir: "leftToRight" | "rightToLeft"
) => {
  switch (dir) {
    case "rightToLeft":
      return {
        offscreen: {
          x: 100,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
            damping: 20,
            delay: delay,
            stiffness: 100,
          },
        },
      };
    case "leftToRight":
      return {
        offscreen: {
          x: -100,
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
            damping: 20,
            delay: delay,
            stiffness: 100,
          },
        },
      };
  }
};

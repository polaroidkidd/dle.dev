import { config } from "@react-spring/web";

export const mainHeadingAnimConfig = {
  config: config.slow,
  from: { opacity: 0, transform: "translate3d(50%, 0, 0)" },
  to: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
  reset: false,
  reverse: false,
};

export const statsBlockAnimaConfig = {
  pause: true,
  config: { ...config.molasses },
  from: {
    opacity: 0,
    x: "-200%",
  },
  to: {
    opacity: 100,
    x: "-0%",
  },
};

export const yearsOfExpCounterAnimaConfig = {
  pause: true,
  number: 15,
  from: { number: 0 },
  delay: 1500,
  config: { duration: 1500 },
};

export const successFulProjectsAnimConfig = {
  pause: true,
  number: 19,
  from: { number: 0 },
  delay: 1500,
  config: { duration: 1500 },
};

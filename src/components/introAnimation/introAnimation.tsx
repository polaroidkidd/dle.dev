import { animated, useSpring } from "@react-spring/web";
import React from "react";
import { AnimatedText } from "./animatedText";
import { mainHeadingAnimConfig } from "./animationConfigs";
import styles from "./introAnimation.module.scss";
import classNames from "classnames";

const animatedTextColor = [
  "bg-clip-text",
  "text-transparent",
  "bg-gradient-to-b",
  "from-yellow-300",
  "to-purple-700",
  "bg-gradient-to-r",
  "from-pink-500",
  "via-red-500",
  "to-yellow-500",
  "background-animate",
  styles.backgroundAnimate,
];

export function IntroAnimation() {
  const [mainHeadingAnimation] = useSpring(mainHeadingAnimConfig, []);

  return (
    <div
      className={classNames(
        "transition-colors",
        "font-extrabold",
        "font-serif",
        "text-4xl",
        "md:text-6xl",
        "subpixel-antialiased",
        "w-full",
        "flex flex-col items-center justify-center",
      )}
    >
      <div
        className={classNames(
          "flex flex-col items-center  w-full h-36 md:h-auto overflow-hidden",
        )}
      >
        <animated.div
          style={mainHeadingAnimation}
          className={classNames(animatedTextColor)}
        >
          I help companies
        </animated.div>
        <AnimatedText animatedTextColor={animatedTextColor} />
      </div>
    </div>
  );
}

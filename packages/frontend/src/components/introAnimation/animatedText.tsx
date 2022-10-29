import { animated, config, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

function Text({
  text,
  next,
  clamp,
  animatedTextColor,
}: {
  text: string;
  next: () => void;
  clamp: boolean;
  animatedTextColor: string[];
}): JSX.Element | null {
  const [spring] = useSpring(
    {
      config: { ...config.slow },
      from: {
        opacity: 0,
        transform: "translate3d(50%, 0px, 0px)",
      },
      to: [
        { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        {
          opacity: clamp ? 1 : 0,
          transform: clamp ? "translate3d(0, 0px, 0px)" : "translate3d(0px, 25%, 0px)",
        },
      ],
      onRest: () => {
        if (!clamp) {
          next();
        }
      },
    },
    [],
  );

  return (
    <animated.div
      style={spring}
      className={classNames("text-center md:text-left pb-2", animatedTextColor)}
    >
      {text}
    </animated.div>
  );
}

const texts = [
  "increase conversions.",
  "generate leads.",
  "tackle technical debt.",
  "design customer journeys.",
  "optimize landingpages.",
  "improve customer retention.",
  "build web applications.",
  "boost developer productivity.",
  "grow.",
];

export function AnimatedText({ animatedTextColor }: { animatedTextColor: string[] }): JSX.Element {
  const initialArray = new Array(texts.length).fill(false);
  initialArray[0] = true;
  const [animateAtIndex, setAnimateAtIndex] = useState<boolean[]>(initialArray);
  const [current, setCurrent] = useState<number>(0);

  function next() {
    setCurrent((ps) => ps + 1);
  }

  useEffect(() => {
    setAnimateAtIndex(() => {
      const run = new Array(texts.length).fill(false);
      run[current] = true;
      return run;
    });
  }, [current]);

  return (
    <>
      {texts.map((t, i) => {
        if (animateAtIndex[i]) {
          return (
            <Text
              key={t}
              text={t}
              animatedTextColor={animatedTextColor}
              next={next}
              clamp={i === texts.length - 1}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

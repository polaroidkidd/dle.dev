import type { SpringValue } from "@react-spring/web";
import { animated } from "@react-spring/web";
import React from "react";
import styles from "./introAnimation.module.scss";
import classNames from "classnames";

export function StatsBlock({
  statsBlockAnimation,
  successfulProjectsCounter,
  yearsOfExperienceCounter,
}: {
  statsBlockAnimation: { opacity: SpringValue<number>; x: SpringValue<string> };
  successfulProjectsCounter: { number: SpringValue<number> };
  yearsOfExperienceCounter: { number: SpringValue<number> };
}) {
  const sunriseTimelapse = "sunriseTimelapse";

  return (
    <animated.div
      style={statsBlockAnimation}
      className={classNames(
        "w-full",
        "z-10",
        "relative",
        "border-gray-700 dark:border-blue-200",
      )}
    >
      <div
        className={classNames(
          styles.imageClipPath,
          "h-80",
          "md:h-96",
          "overflow-clip",
          "bg-black",
        )}
      >
        <video
          controls={false}
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
          className={classNames(
            "absolute",
            "object-cover",
            "h-full",
            "w-full",
            // "blur-sm",
            "opacity-80",
          )}
        >
          <source
            type="video/mp4"
            src={`/videos/${sunriseTimelapse}-vp9-q63.webm`}
          />
          <source
            type="video/mp4"
            src={`/videos/${sunriseTimelapse}-vpx-q63.webm`}
          />
          <source type="video/mp4" src={`/videos/${sunriseTimelapse}.webm`} />
          <source type="video/mp4" src={`/videos/${sunriseTimelapse}.mp4`} />
        </video>
      </div>
      <div
        className={classNames(
          "absolute",
          "top-1/2",
          "-translate-y-1/2",
          "w-full",
          "h-full",
          styles.imageClipPath,
        )}
      >
        <div
          className={classNames(
            "border-t-4",
            "border-b-4",
            "px-4",
            "border-white",
            "w-full",
            "absolute",
            "top-1/2",
            "-translate-y-1/2",
            "flex",
            "justify-center",
          )}
        >
          <div
            className={classNames(
              "flex",
              "flex-col",
              "md:flex-row",
              "my-4",
              "justify-around",
              "items-center",
              "w-full",
            )}
          >
            <Counter
              counter={yearsOfExperienceCounter}
              text="Years of Experience"
            />
            <Counter
              counter={successfulProjectsCounter}
              text="Successful Projects"
            />
          </div>
        </div>
      </div>
    </animated.div>
  );
}

function Counter({
  text,
  counter,
}: {
  text: string;
  counter: { number: SpringValue<number> };
}) {
  return (
    <div className={classNames("flex", "first:mb-3", "md:first:mb-0")}>
      <div className={classNames("text-white")}>
        <animated.div className="text-6xl lg:text-7xl pr-4">
          {counter.number.to((number) =>
            number < 10 ? `0${Math.floor(number)}` : `${Math.floor(number)}`,
          )}
        </animated.div>
        <div className={classNames("text-xl", "lg:text-2xl")}>{text}</div>
      </div>
    </div>
  );
}

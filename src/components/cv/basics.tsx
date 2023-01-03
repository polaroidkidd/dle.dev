import type { ILocation } from "@components/cv/location";
import type { IProfile } from "@components/cv/profile";
import { Profile } from "@components/cv/profile";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type IBasics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  location: ILocation;
  profiles: IProfile[];
};

const labels = ["Software", "UX/UI", "Web", "Fullstack"];

export function Basics({ profiles, name }: IBasics) {
  const leftProfile = profiles[0];
  const rightProfile = profiles[1];
  const [label, setLabel] = useState<string>("");
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  function updatedLabel() {
    let currentIndex = 0;
    let currentWordLength = 0;
    let charIndex = 0;
    let shouldCountUp = true;
    intervalId.current = setInterval(() => {
      currentWordLength = labels[currentIndex].length;
      setLabel(labels[currentIndex].slice(0, charIndex));
      if (charIndex < currentWordLength && shouldCountUp) {
        charIndex++;
        if (charIndex === currentWordLength) {
          shouldCountUp = false;
        }
      } else if (!shouldCountUp) {
        charIndex--;
        if (charIndex === 0) {
          charIndex = 0;
          currentIndex =
            currentIndex === labels.length - 1 ? 0 : ++currentIndex;
          shouldCountUp = true;
        }
      }
    }, 200);
  }
  useEffect(() => {
    updatedLabel();
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mb-5 print:hidden">
        <div className="flex justify-center items-center">
          <Profile {...leftProfile} className="hover:fill-red-200" />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={avatar}
            alt="avatar"
            className={"rounded-full border border-red-300 w-32"}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <Profile {...rightProfile} className="hover:fill-red-200" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>{name}</div>
        <div>Senior {label} Engineer</div>
      </div>
    </>
  );
}

import React, { useEffect, useRef } from "react";
import { IntroAnimation } from "@components/introAnimation/introAnimation";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
    }, 5000);
  }, []);

  return (
    <>
      <NextSeo
        title="Daniel Einars | Web-Dev"
        description="I build web things, consult and walk my dog."
      />
      <div className={classNames("flex flex-col items-center  md:flex-row md:items-stretch")}>
        <div
          className={classNames(
            "rounded-full",
            "overflow-clip",
            "outline outline-offset-1 outline-2",
            "outline-red-300",
            "hover:outline-red-400 hover:outline-offset-4 hover:outline-2",
            "transition-all",
            "flex",
            "justify-center",
            "w-60",
            "mb-4 md:mb-0",
            "overflow-hidden",
          )}
        >
          <Image src={avatar} alt="avatar" objectFit="cover" />
        </div>
        <IntroAnimation />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

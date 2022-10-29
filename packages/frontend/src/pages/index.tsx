import React, { useEffect, useRef } from "react";
import type { ComponentSharedSeoInput, HomeQuery } from "@types";
import type { IDynamicZone, IPublishedAndUpdatedAt } from "@components";
import { IntroAnimation, Seo } from "@components";
import { GET_HOME, getApolloClient } from "@services";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import classNames from "classnames";
import Image from "next/image";
import type { GetStaticPropsResult } from "next/types";

interface IHomeProps {
  title: string;
  seo: ComponentSharedSeoInput;
  publishedAndUpdatedAt: IPublishedAndUpdatedAt;
  dynamic: IDynamicZone;
}

function Home({ seo }: IHomeProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
    }, 5000);
  }, []);

  return (
    <>
      <Seo {...seo} />
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

export async function getStaticProps(): Promise<GetStaticPropsResult<IHomeProps>> {
  const client = getApolloClient();
  const { data } = await client.query<HomeQuery>({ query: GET_HOME });
  const seoProps = {
    metaTitle: data.home?.data?.attributes?.seo?.metaTitle ?? "",
    metaDescription: data.home?.data?.attributes?.seo?.metaDescription ?? "",
    keywords: data.home?.data?.attributes?.seo?.keywords ?? "",
    metaViewport: data.home?.data?.attributes?.seo?.metaViewport ?? "",
    metaRobots: data.home?.data?.attributes?.seo?.metaRobots ?? "",
    canonicalURL: data.home?.data?.attributes?.seo?.canonicalURL ?? "",
  };

  return {
    props: {
      title: data.home?.data?.attributes?.title ?? "",
      publishedAndUpdatedAt: {
        publishedAt: Date.parse(data.home?.data?.attributes?.publishedAt),
        updatedAt: Date.parse(data.home?.data?.attributes?.updatedAt),
      },
      seo: seoProps,
      dynamic: data.home?.data?.attributes?.dynamic as IDynamicZone,
    },
  };
}

export default Home;

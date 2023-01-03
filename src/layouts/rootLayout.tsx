import type { ReactNode } from "react";
import { Container } from "@components/container/container";
import { Navbar } from "@components/navigation/navbar";
import { Merriweather } from "@next/font/google";
import classNames from "classnames";

type IRootLayout = {
  children: ReactNode;
};

const merriWeather = Merriweather({
  preload: true,
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export function RootLayout({ children }: IRootLayout) {
  return (
    <div id="app-wrapper">
      <div className={classNames(merriWeather.className, "leading-normal")}>
        <Navbar />
        <div className="min-h-[calc(100vh-0px)] pt-[80px] bg-white dark:bg-neutral-900 transition-colors ">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
}

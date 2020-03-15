import React from "react";
import { WelcomeMessage } from "../../components";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <section className=".home">
      <WelcomeMessage heading="Welcome to my corner of the internet."
                      message="This is currently a work in progress. Not much here to see yet."/>

    </section>
  );
};
export { Home };
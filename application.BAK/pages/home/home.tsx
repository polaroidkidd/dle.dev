import React from "react";
import { WelcomeMessage } from "../../components";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <section className=".home">
      <WelcomeMessage/>

    </section>
  );
};
export { Home };
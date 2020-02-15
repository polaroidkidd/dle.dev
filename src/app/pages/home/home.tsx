import React from "react";
import image from "../../assets/headshot/daniel_einars-400x500.jpg";
import { HeadingPrimary, HeadingSecondary, Navigation, ProfilePicture, WelcomeMessage } from "../../components";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <section className=".home">
      <ProfilePicture
        imageSrc={image}
        isLarge={true}/>
      <HeadingPrimary
        text="dle"/>
      <Navigation/>
      <WelcomeMessage heading="Welcome to my corner of the internet."/>
      <HeadingSecondary text="This is currently a work in progress. Not much here to see yet."/>


    </section>
  );
};
export { Home };
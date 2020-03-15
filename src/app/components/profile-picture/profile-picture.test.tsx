import React from "react";
import renderer from "react-test-renderer";
import { ProfilePicture } from "./index";
import img from "../../assets/images/headshot/daniel_einars-400x500.jpg";

test("Render large ProfilePicture with source image url string", () => {
  const tree = renderer.create(<ProfilePicture isLarge={true} imageSrc={img}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render small ProfilePicture with source image url string", () => {
  const tree = renderer.create(<ProfilePicture isLarge={false} imageSrc={img}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
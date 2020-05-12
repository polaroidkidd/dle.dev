import React from "react";
import renderer from "react-test-renderer";
import { ProfilePicture } from "./index";
import img from "../../assets/images/headshot/daniel_einars-400x500.jpg";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";


const history = createBrowserHistory();


test("Render large ProfilePicture with source image url string", () => {
  const tree = renderer.create(
    <Router history={history}>
      <ProfilePicture imageSrc={img} handleActiveNavigation={() => {
      }}/>
    </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
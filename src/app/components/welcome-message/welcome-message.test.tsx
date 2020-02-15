import React from "react";
import renderer from "react-test-renderer";
import { WelcomeMessage } from "./welcome-message";

test("Render WelcomeMessage with text", () => {
  const tree = renderer.create(<WelcomeMessage heading="test heading"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render WelcomeMessage with empty string", () => {
  const tree = renderer.create(<WelcomeMessage heading=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});

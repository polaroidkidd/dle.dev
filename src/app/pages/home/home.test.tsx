import React from "react";
import renderer from "react-test-renderer";
import { Home } from "./home";

test("Expect to render complete Home", () => {
  const tree = renderer.create(<Home/>).toJSON();
  expect(tree).toMatchSnapshot();
});
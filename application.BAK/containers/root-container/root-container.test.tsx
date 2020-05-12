import React from "react";
import renderer from "react-test-renderer";
import { RootContainer } from "../index";

test("Render Root Container", () => {
  const tree = renderer.create(<RootContainer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

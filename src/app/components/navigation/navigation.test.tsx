import React from "react";
import renderer from "react-test-renderer";
import { Navigation } from "./index";

test("Render Navigation", () => {
  const tree = renderer.create(<Navigation/>).toJSON();
  expect(tree).toMatchSnapshot();
});

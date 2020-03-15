import React from "react";
import renderer from "react-test-renderer";
import { Portfolio } from "./index";

test("Render Portfolio Component", () => {
  const tree = renderer.create(
    <Portfolio/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

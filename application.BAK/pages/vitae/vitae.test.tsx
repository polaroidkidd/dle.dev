import React from "react";
import renderer from "react-test-renderer";
import { Vitae } from "./vitae";

test("Render Vitae Component", () => {
  const tree = renderer.create(
    <Vitae/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

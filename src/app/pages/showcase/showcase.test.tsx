import React from "react";
import renderer from "react-test-renderer";
import { ShowCase } from "./index";


test("Render ShowCase Component", () => {
  const tree = renderer.create(
    <ShowCase/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

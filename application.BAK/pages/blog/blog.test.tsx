import React from "react";
import renderer from "react-test-renderer";
import { Blog } from "./blog";

test("Render Blog Component", () => {
  const tree = renderer.create(
    <Blog/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

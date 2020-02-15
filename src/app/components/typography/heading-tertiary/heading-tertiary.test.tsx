import React from "react";
import renderer from "react-test-renderer";
import { HeadingTertiary } from "./index";

test("Render HeadingTertiary with text", () => {
  const tree = renderer.create(<HeadingTertiary text="test heading"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render HeadingTertiary with empty string", () => {
  const tree = renderer.create(<HeadingTertiary text=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});

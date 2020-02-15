import React from "react";
import renderer from "react-test-renderer";
import { HeadingPrimary } from "./index";

test("Render HeadingPrimary with text", () => {
  const tree = renderer.create(<HeadingPrimary text="test heading"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render HeadingPrimary with empty string", () => {
  const tree = renderer.create(<HeadingPrimary text=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});

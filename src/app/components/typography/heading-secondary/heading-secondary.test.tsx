import React from "react";
import renderer from "react-test-renderer";
import { HeadingSecondary } from "./index";

test("Render HeadingSecondary with text", () => {
  const tree = renderer.create(<HeadingSecondary text="test heading"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render HeadingSecondary with empty string", () => {
  const tree = renderer.create(<HeadingSecondary text=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});
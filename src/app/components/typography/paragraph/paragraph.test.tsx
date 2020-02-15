import React from "react";
import renderer from "react-test-renderer";
import { Paragraph } from "./paragraph";


test("Render Paragraph with text", () => {
  const tree = renderer.create(<Paragraph text="test heading"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render Paragraph with empty string", () => {
  const tree = renderer.create(<Paragraph text=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});

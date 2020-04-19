import React from "react";
import renderer from "react-test-renderer";
import { LatestNews } from "./latest-news";


test("Render Navigation", () => {
  const tree = renderer.create(
    <LatestNews/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

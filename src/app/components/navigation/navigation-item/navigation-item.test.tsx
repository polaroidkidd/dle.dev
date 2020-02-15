import React from "react";
import renderer from "react-test-renderer";
import NavigationItem from "./navigation-item";

test("Render Navigation", () => {
  const tree = renderer.create(
    <NavigationItem
      active={false}
      description={"vitae"}
      handleActiveNavigation={() => {
        console.log("Handling Test Navigation");
      }}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

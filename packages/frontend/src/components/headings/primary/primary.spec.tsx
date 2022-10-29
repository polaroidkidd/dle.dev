import { PrimaryHeading } from "@components/headings";
import { render } from "@test";

describe("Header component testing with testing-library", () => {
  const { getByTestId } = render(<PrimaryHeading text="Primary H1 Heading" />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});

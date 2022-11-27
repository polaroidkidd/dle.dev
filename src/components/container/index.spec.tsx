import { Container } from "./container";
import { render } from "@test";

describe("Wrapper component testing with testing-library", () => {
  const component = render(
    <Container>
      <h1>Test</h1>
    </Container>,
  );

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});

import { IconClose } from "@icons/IconClose";
const selector = '[data-cy="close"]';

const ariaLabel = "close";
describe("IconClose.cy.ts", () => {
  beforeEach(() => {
    cy.mount(<IconClose width={52} aria-label={ariaLabel} />);
    cy.injectAxe();
  });

  it("has no detectable a11y violations ", () => {
    cy.checkA11y(selector);
  });

  it("has assigned width", () => {
    cy.get(selector).invoke("outerWidth").should("be.lessThan", 53);
    cy.get(selector).invoke("outerWidth").should("be.greaterThan", 51);
  });

  it("should have an aria label", () => {
    cy.get(selector)
      .should("be.visible")
      .and("have.attr", "aria-label", ariaLabel);
  });
});

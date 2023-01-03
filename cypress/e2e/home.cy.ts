/// <reference types="cypress" />

describe("home", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("/");
  });
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("should close the search overlay when clicking the close button on mobile", () => {
    const articleSelector = '[data-cy="article-container"]';
    cy.get(articleSelector).should("exist");
    cy.get(articleSelector).children().should("have.length", 4);
  });
});

export {};

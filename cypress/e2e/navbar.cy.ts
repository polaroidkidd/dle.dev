/// <reference types="cypress" />

import { MOBILE_VIEW_PORT } from "../utils/constants";

const themeToggleButton = '[data-cy="themeToggleButton"]';
describe("navbar", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("/");
  });
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("should load with default light theme, then switch to dark theme and then back to light theme", () => {
    cy.get("#app-wrapper").should("have.class", "light");
    cy.getCookie("theme").should("have.property", "value", "light");
    cy.get(themeToggleButton).click();
    cy.get("#app-wrapper").should("have.class", "dark");
    cy.getCookie("theme").should("have.property", "value", "dark");
    cy.get(themeToggleButton).click();
    cy.getCookie("theme").should("have.property", "value", "light");
    cy.get("#app-wrapper").should("have.class", "light");
  });
  it("should load with default light theme, then switch to dark theme and then back to light theme on mobile", () => {
    cy.viewport(MOBILE_VIEW_PORT);
    cy.get("#app-wrapper").should("have.class", "light");
    cy.getCookie("theme").should("have.property", "value", "light");
    cy.get(themeToggleButton).click();
    cy.get("#app-wrapper").should("have.class", "dark");
    cy.getCookie("theme").should("have.property", "value", "dark");
    cy.get(themeToggleButton).click();
    cy.getCookie("theme").should("have.property", "value", "light");
    cy.get("#app-wrapper").should("have.class", "light");
  });
  it("should open the search overlay when clicking the search button on mobile", () => {
    cy.viewport(MOBILE_VIEW_PORT);
    const searchSelector = '[data-cy="search"]';
    cy.get('[class*="searchBox_mobileSearchContainer"]').should("not.exist");
    cy.get(searchSelector).click();
    cy.get('[class*="searchBox_mobileSearchContainer"]').should("exist");
  });

  it("should close the search overlay when clicking the close button on mobile", () => {
    cy.viewport(MOBILE_VIEW_PORT);
    const closeSelector = '[data-cy="close"]';
    const searchSelector = '[data-cy="search"]';
    cy.get('[class*="searchBox_mobileSearchContainer"]').should("not.exist");
    cy.get(searchSelector).click();
    cy.get('[class*="searchBox_mobileSearchContainer"]').should("exist");
    cy.get(closeSelector).click();
    cy.get('[class*="searchBox_mobileSearchContainer"]').should("not.exist");
  });

  it("should navigate to the about page", () => {
    const aboutLink = '[data-cy="/about"]';
    cy.get(aboutLink).click();
    cy.location("pathname").should("match", /\/about$/);
  });

  it("should navigate to the blog page", () => {
    const aboutLink = '[data-cy="/blog"]';
    cy.get(aboutLink).click();
    cy.location("pathname").should("match", /\/blog$/);
  });

  it("should navigate to the home page", () => {
    const aboutLink = '[data-cy="/"]';
    cy.get(aboutLink).click();
    cy.location("pathname").should("match", /\/$/);
  });
});

export {};

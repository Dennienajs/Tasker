/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe("Tasker app", () => {
  const url = "http://localhost:4200/";

  beforeEach(() => {
    cy.visit(url);
  });

  it("displays tasker with header 'Tasker'", () => {
    cy.get("app-header").should("contain", "Tasker");
  });

  it("defaults to darkmode", () => {
    cy.get("html").should("have.class", "dark");
    cy.get("body").should("contain.class", "dark:bg-slate-900");
  });

  it("can toggle darkmode", () => {
    cy.get("app-header fa-icon").click();
    cy.get("html").should("not.have.class", "dark");

    cy.get("app-header fa-icon").click();
    cy.get("html").should("have.class", "dark");
  });

  it("can add a task", () => {
    function addTask(text) {
      cy.get("app-header app-button").click();
      cy.get("#text").type(text);
      cy.get("#day").type("2022-05-29T12:30");
      cy.get("#reminder").click();
      cy.contains("Gem").click();
    }

    // add three tasks
    const taskText = "Test Task";
    for (let i = 0; i < 3; i++) {
      addTask(taskText + i);
      cy.get(".container").contains(taskText);
    }
  });

  it("can toggle reminder", () => {
    const id = "[data-test-id=task]";
    const css = "border-l border-green-500";

    cy.get(id).last().should("contain.class", css);
    cy.get(id).last().dblclick();
    cy.get(id).last().should("not.contain.class", css);
  });

  it("can delete a task", () => {
    const id = "[data-test-id=task]";

    cy.get(id).should("exist");
    cy.get("[data-test-id=delete-task]").click({ multiple: true });
    cy.get(id).should("not.exist");
  });
});

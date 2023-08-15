/// <reference types="cypress" />

describe("Hope...", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Must wait for element to be available", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("foncionou");
  });

  it("Should do retrys", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("exist").type("funciona");
  });

  it.only("Use of find", () => {
    cy.get("#buttonListDOM").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");
    cy.get("#lista li span").should("contain", "Item 2");
    //cy.get("#lista li").find("span").should("contain", "Item 2");
    //cy.get("#lista li span").should("contain", "Item 2");
  });

  it.only("Use of TimeOut", () => {
    //cy.get("#buttonDelay").click();
    //cy.get("#novoCampo").should("exist");
    cy.get("#buttonListDOM").click();
    //cy.wait(5000);
    cy.get("#lista li span", { timeout: 3000 }).should("have.length", 1);
  });

  it.only("Click Retry", () => {
    cy.get("#buttonCount").click().click().should("have.value", "1");
    //comandos de retry no HTML não tendem a funcionar devido a alteração de textos.
  });

  it.only("Should vs Then", () => {
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").then(($el) => {
      //.should('have.length', 1)
      expect($el).to.have.length(1)
    }).and('have.id', 'buttonListDOM')
  });
});

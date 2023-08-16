/// <reference types="cypress" />

describe("Dinamic test", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });
  it("Going back to the past", () => {
    // cy.get("#buttonNow").click();
    // cy.get('#resultado > span').should('contain', '16/08/2023')
    // cy.clock()

    const dt = new Date(2004, 7, 12, 12, 21, 58);
    cy.clock(dt.getTime());
    cy.get("#buttonNow").click();
    cy.get("#resultado > span").should("contain", "12/08/2004");
  });

  it.only("Goes to the future", () => {
    cy.get("#buttonTimePassed").click();
    cy.get("#resultado > span").should("contain", "1151675");
    cy.get("#resultado > span").invoke("text").should("gt", 15684613);

    cy.clock();
    cy.get("#buttonTimePassed").click();
    cy.get("#resultado > span").invoke("text").should("lte", 0);


    cy.tick(5000);
    cy.get("#buttonTimePassed").click();
    cy.get("#resultado > span").invoke("text").should("gte", 5000);

    cy.tick(5000);
    cy.get("#buttonTimePassed").click();
    cy.get("#resultado > span").invoke("text").should("gte", 5000);
    
  });
});

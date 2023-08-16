/// <reference types="cypress" />
describe("Work with basic elements", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Using Jquery selector", () => {
    cy.get(":nth-child(2) > :nth-child(1) > :nth-child(3) > input");
    cy.get("#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(3)");
    cy.get("[onclick*='Francisco']");
  });

//   it("Using Xpath", () => {
//cy.xpath("//input[@id='input#confirm']");
//cy.xpath('//input')
//   });
});

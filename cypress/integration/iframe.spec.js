/// <reference types="cypress" />
describe("Work with iframe`s", () => {
  it("Must fill text field", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get("#frame1").then((iframe) => {
      const bodyFrame = iframe.contents().find("body");
      cy.wrap(bodyFrame)
        .find("#tfield")
        .type("funciona?")
        .should("have.value", "funciona?");
    });
  });

  it("Must fill text field external", () => {
    cy.visit("https://wcaquino.me/cypress/frame.html");
      cy.get('#otherButton').click()
      cy.on('window:alert', msg => {
        expect(msg).to.be.equal('Click OK!')
      })
    });
  });

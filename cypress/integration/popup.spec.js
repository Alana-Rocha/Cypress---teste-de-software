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
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.window().then((win) => {
      cy.stub(win, "open").as("winOpen");
    });
    cy.get("#buttonPopUp").click();
    cy.get("@winOpen").should("be.called");
  });

  describe.only("With Links...", () => {
    beforeEach(() => {
      cy.visit("https://wcaquino.me/cypress/componentes.html");
    });
    it("Check poput url", () => {
      cy.contains("Popup2")
        .should("have.prop", "href")
        .and("equal", "https://wcaquino.me/cypress/frame.html");
    });

    it("Should acess popup dinamically", () => {
      cy.contains("Popup2").then(($a) => {
        const href = $a.prop("href");
        cy.visit(href);
        cy.get("#tfield").type("Teste");
      });
    });
    
    it("Should force link on same page", () => {
      cy.contains("Popup2").invoke("removeAttr", "target").click();
      cy.get("#tfield").type("Teste");
    });
  });
});

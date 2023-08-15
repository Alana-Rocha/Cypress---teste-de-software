/// <reference types="cypress" />

describe("Cypress basics", () => {
  it.only("Should visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.title().should("be.equal", "Campo de Treinamento");
    cy.title().should("contain", "Campo");
    cy.title().then((title) => {
      console.log(title);

      let syncTitle;

      cy.title().then((title) => {
        console.log(title);

        cy.get("#formNome").type(title);
        syncTitle = title;
      });

      cy.get("#formSobrenome").then(($el) => {
        $el.val(syncTitle); //o texto insere sem digit
      });

      cy.get("#elementosForm\\:sugestoes").then(($el) => {
        cy.wrap($el).type(syncTitle); //forma digitada
      });
    });
  });
  it("Should find and interact with an element", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});

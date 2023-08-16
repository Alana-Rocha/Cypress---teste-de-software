/// <reference types="cypress" />

describe("Dinamic test", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  //click completo
  const foods = ["Carne", "Frango", "Pizza", "Vegetariano"];
  foods.forEach((food) => {
    it(`Register with varied food ${food}`, () => {
      cy.get("#formNome").type("Alana");
      cy.get("#formSobrenome").type("Rocha");
      cy.get("[name=formSexo][value=F]").click();
      cy.xpath(
        `//label[contains(., '${food}')]/preceding-sibling::input`
      ).click();
      cy.get("#formEscolaridade").select("Mestrado");
      cy.get("#formEsportes").select("Corrida");
      cy.get("#formCadastrar").click();
      cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
    });
  });


  //click seletivo
  it.only("Must select all using it...", () => {
    cy.get("#formNome").type("Alana");
    cy.get("#formSobrenome").type("Rocha");
    cy.get("[name=formSexo][value=F]").click();
    cy.get("[name=formComidaFavorita]").each(($el) => {
      if ($el.val() != "vegetariano") {
        cy.wrap($el).click();
      }
    });
    cy.get("#formEscolaridade").select("Mestrado");
    cy.get("#formEsportes").select("Corrida");
    //cy.get("#formCadastrar").click();
    //cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
    cy.clickAlert("#formCadastrar", "Tem certeza que voce eh vegetariano?");
  });
});

/// <reference types="cypress" />

describe("Work with basic elements", () => {
  before(() => {
    // executa uma vez para todos os testes.
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    // executa cada vez que um teste for executado.
    cy.reload();
  });
  it("Text", () => {
    cy.get("body").should("contain", "Cuidado");
    //cy.get("span").should("have.text", "Cuidado");
    //cy.get("div").should("contain", "Cuidado");
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });

  it("Links", () => {
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });

  it("TextFields", () => {
    cy.get("#formNome").type("Cypress test");
    cy.get("#formNome").should("have.value", "Cypress test");

    cy.get("#elementosForm\\:sugestoes").type("TextArea Test");
    cy.get("#elementosForm\\:sugestoes").should("have.value", "TextArea Test");

    cy.get("[data-cy=dataSobrenome]")
      .type("Alana Rocha23{backspace}{backspace}")
      .should("have.value", "Alana Rocha");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Error{selectall}acerto", { delay: 100 })
      .should("have.value", "acerto");
  });

  it("Radio", () => {
    cy.get("#formSexoFem").click().should("be.checked");
    cy.get("#formSexoMasc").should("not.be.checked");

    cy.get('[name="formSexo"]').should("have.length", 2);
  });

  it("CheckBox", () => {
    cy.get("#formComidaPizza").click().should("be.checked");
    cy.get('[name="formComidaFavorita"]').click({ multiple: true });
  });

  it("Combo", () => {
    cy.get("[data-test=dataEscolaridade]")
      .select("Superior") // texto
      .should("have.value", "superior"); // value

    cy.get("[data-test=dataEscolaridade] option").should("have.length", 8);
    cy.get("[data-test=dataEscolaridade] option").then(($arr) => {
      const values = [];
      $arr.each(function () {
        values.push(this.innerHTML);
      });
      expect(values).to.include.members(["Superior", "Mestrado", "Doutorado"]);
    });
  });

  it.only("ComboMultiple", () => {
    cy.get('[data-testid="dataEsportes"]').select(["natacao", "Corrida"]);
    //cy.get('[data-testid="dataEsportes"]').should("have.value", ["Natacao", "Futebol"]);

    cy.get('[data-testid="dataEsportes"]').then(($el) => {
      expect($el.val()).to.be.deep.equal(["natacao", "Corrida"]);
      expect($el.val()).to.have.length(2);
    });

    cy.get('[data-testid="dataEsportes"]').invoke("val").should("eql", ["natacao", "Corrida"]);

    //eql -> deep.Equal
  });
});

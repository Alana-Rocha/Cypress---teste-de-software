/// <reference types="cypress" />

describe("Helpers...", () => {
  it("Wrap", () => {
    const obj = { nome: "User", idade: 20 };
    expect(obj).to.have.property("nome");
    cy.wrap(obj).should("have.property", "nome");

    cy.visit("https://wcaquino.me/cypress/componentes.html");
    //cy.get("#formNome").then(($el) => {
    //cy.wrap($el).type("Funciona?");

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);

      cy.get("#buttonSimple").then(() =>
        console.log("Encontrei o primeiro botão!")
      );
      //promise.then((num) => console.log(num));
      cy.wrap(promise).then((ret) => console.log(ret));
      cy.get("#buttonList").then(() =>
        console.log("Encontrei o segundo botão!")
      );
    });
  });

  it("Its...", () => {
    const obj = { nome: "Alana", idade: 18 };
    //cy.wrap(obj).should("have.property", "nome", "Alana");
    cy.wrap(obj).its("nome").should("be.equal", "Alana");

    const dados = {
      nome: "Emy",
      idade: 18,
      endereco: { rua: "Espírito santo" },
    };
    cy.wrap(dados).its("endereco.rua").should("contain", "santo");
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.title().its("length").should("be.equal", 20);
  });

  it("Invoke...", () => {
    const getValue = () => 1;
    const soma = (a, b) => a + b;
    cy.wrap({ fn: getValue }).invoke("fn").should("be.equal", 1);
    cy.wrap({ fn: soma }).invoke("fn", 2, 46).should("be.equal", 48);

    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get("#formNome").invoke("val", "Texto via invoke");
    cy.window().invoke("alert", "Este é o meu alert!");
    cy.get('#resultado').invoke('html', '<input type="button" value="teste"></>')
  });
});

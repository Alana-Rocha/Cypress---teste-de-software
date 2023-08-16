/// <reference types="cypress" />

describe("Work with alerts", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Alert", () => {
    // cy.get("#alert").click();
    // cy.on("window:alert", (msg) => {
    // on -> pega eventos que ocorrem na tela.
    //   console.log(msg);
    //   expect(msg).to.be.equal("Alert Simples");
    // });
    cy.clickAlert("#alert", "Alert Simples");
  });

  it("Alert with mock...", () => {
    const stub = cy.stub().as("alerta");
    // stub -> Substitui uma função, registra seu uso e controla seu comportamento, assim como um mock.
    cy.on("window:alert", stub);
    cy.get("#alert")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Alert Simples"); //assert
      });
  });

  it.only("Confirm", () => {
    cy.get("#confirm").click();
    cy.on("window:confirm", (msg) => {
      expect(msg).to.be.equal("Confirm Simples");
    });
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("Confirmado");
    });
  });

  it("Deny", () => {
    cy.get("#confirm").click();
    cy.on("window:confirm", (msg) => {
      expect(msg).to.be.equal("Confirm Simples");
      return false;
    });
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("Negado");
    });
  });

  it.only("Prompt", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("45");
    });
    cy.on("window:confirm", (msg) => {
      expect(msg).to.be.equal("Era 45?");
    });
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal(":D");
    });
    cy.get("#prompt").click();
  });
});

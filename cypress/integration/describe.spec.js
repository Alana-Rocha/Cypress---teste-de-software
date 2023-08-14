/// <reference types="cypress" />

it("A external test...", () => {});

describe("Should group test...", () => {
  describe("Sould group more specific tests...", () => {
    it("A internal test...", () => {});
  });

  describe("Should group more specific testes 2...", () => {
    it("A specific test 2...", () => {});
  });
});

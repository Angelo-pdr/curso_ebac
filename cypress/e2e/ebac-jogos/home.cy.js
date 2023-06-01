/// <reference types="cypress" />

describe("Teste para home", () => {
  beforeEach(() => cy.visit("https://agenda-contatos-react.vercel.app/"));

  it("Deve renderiza 3 contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    cy.get("div .contato").should("have.length", 3);
  });

  it("Deve adicionar um novo contato", () => {
    cy.get('[type="text"]').type("Angelo");
    cy.get('[type="email"]').type("angelo.ppedrosa@gmail.com");
    cy.get('[type="tel"]').type("31975732125");
    cy.get(".adicionar").click();
  });

  it("Deve verifica se um novo contato foi adicionado", () => {
    cy.get("div .contato").should("have.length", 4);
  });

  it("Deve remove um contato", () => {
    cy.get(".delete").last().click();
  });

  it("Deve renderiza 3 contatos, ser um foi removido", () => {
    cy.get("div .contato").should("have.length", 3);
  });

  it("Deve Altera o primeiro contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="tel"]').clear();
    cy.get('[type="text"]').type("Gabriel");
    cy.get('[type="email"]').type("gabriel.ppedrosa@gmail.com");
    cy.get('[type="tel"]').type("31975732222");
    cy.get(".alterar").click();
  });

  it("Verifica se primeiro contato foi alterado", () => {
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      "Gabriel"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)").should(
      "have.text",
      "31975732222"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      "gabriel.ppedrosa@gmail.com"
    );
  });

  it("Não deve altera o primeiro contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="tel"]').clear();
    cy.get('[type="text"]').type("Angelo");
    cy.get('[type="email"]').type("angelo.ppedrosa@gmail.com");
    cy.get('[type="tel"]').type("31975732125");
    cy.get(".cancelar").click();
  });

  it("Verifica se primeiro contato não foi alterado", () => {
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      "Gabriel"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)").should(
      "have.text",
      "31975732222"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      "gabriel.ppedrosa@gmail.com"
    );
  });
});

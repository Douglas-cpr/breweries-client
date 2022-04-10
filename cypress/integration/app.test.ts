describe("app", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().should("have.property", "appReady", true);
  });
});

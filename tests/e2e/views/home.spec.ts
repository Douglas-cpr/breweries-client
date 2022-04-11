describe('Home view', () => {
  it('should display playground text on page', () => {
    cy.visit('/');
    cy.contains('h1', 'Breweries')
  });
});
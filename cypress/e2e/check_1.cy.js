describe('Heading Text', () => {
  it('The main page contain the title', () => {
    cy.visit('http://localhost:5173/example-1')
    cy.get('h1').should('have.text', 'My Awesome Web Application')
  })
})
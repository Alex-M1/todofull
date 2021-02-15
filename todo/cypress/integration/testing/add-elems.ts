describe('add-elems', () => {
  it('add', () => {
    cy.visit('http://localhost:4300/')
    cy.get('input[ role="add-input"]').type('New Todo!')
    cy.get('button[role="add-btn"]').click()
  })
})
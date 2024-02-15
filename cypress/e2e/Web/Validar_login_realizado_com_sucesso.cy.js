describe('Funcionalidade Login', () => {
  it('Validar Login realizado com sucesso', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('nome')
    cy.get('td > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'nome')
  })

  
})
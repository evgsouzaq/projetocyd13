/// <reference types="cypress" />

describe('Pagina aprendendo a testar', () => {

    it('Validar acesso a pagina home', () => {
        cy.visit('http://aprendendotestar.com.br/index.html')

    })

    it('Validar acesso a pagina automacao de teste', () => {
       cy.visit('http://aprendendotestar.com.br/index.html')
       cy.get(':nth-child(6) > a > .caption > .work_title > h1').click()
    })

})
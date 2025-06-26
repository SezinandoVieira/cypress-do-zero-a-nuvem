describe('Testando os inputs da pagina', () =>{

    beforeEach(() => {
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('Testando os inputs', () => {

        const texto = Cypress._.repeat('Esse texto, muito texto, cheio de texto, que é texto', 7)
        
       cy.get('[id=firstName]')
       .as('firstName')
       .type('Sezinando', { delay:0 })
       cy.get('@firstName')

       .should('be.visible') 
       .should('have.value','Sezinando')

       cy.get('[id=lastName]')
       .as('lastName')
       .type('Vieira', { delay:0 })
       cy.get('@lastName')

       .should('be.visible')
       .should('have.value','Vieira')

       cy.get('[id=email]')
       .as('email')
       .type('teste@teste.com', { delay:0 })
       cy.get('@email')

       .should('be.visible')
       .should('have.value','teste@teste.com')

       cy.get('[id=open-text-area]')
       .as('textBlock')
       .type(texto, { delay:0 })
       cy.get('@textBlock')

       .should('be.visible')
       .should('have.value', texto)
       
       cy.get('button[type="submit"]')
       .click()

       cy.get('.success').should('be.visible');

    });    

})
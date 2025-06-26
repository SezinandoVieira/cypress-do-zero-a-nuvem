describe('Testando os inputs da pagina', () =>{

    beforeEach(() => {
        cy.visit('./src/index.html');
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    });

    it('Testando os inputs', () => {
        
       cy.get('[id=firstName]')
       .as('firstName')
       .type('Sezinando')
       cy.get('@firstName')

       .should('be.visible') 
       .should('have.value','Sezinando')

       cy.get('[id=lastName]')
       .as('lastName')
       .type('Vieira')
       cy.get('@lastName')

       .should('be.visible')
       .should('have.value','Vieira')

       cy.get('[id=email]')
       .as('email')
       .type('teste@teste.com')
       cy.get('@email')

       .should('be.visible')
       .should('have.value','teste@teste.com')

       cy.get('[id=open-text-area]')
       .as('textBlock')
       .type('Um texto qualquer para ver se ta escrevendo')
       cy.get('@textBlock')

       .should('be.visible')
       .should('have.value', 'Um texto qualquer para ver se ta escrevendo')
       
       cy.get('button[type="submit"]')
       .as('button')
       .click()

       cy.get('.success').should('be.visible');

    });    

})
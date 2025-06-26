beforeEach(() => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
});
it('Forçando um erro no teste', () => {

    cy.get('#firstName').type('Astronogildo')

    cy.get('#lastName').type('Girosvaldo')

    cy.get('#email').type('teste')
    
    cy.get('#open-text-area').type('Um texto qualquer')

    cy.get('button[type="submit"]').click()
    
    cy.get('.error').should('be.visible')
})
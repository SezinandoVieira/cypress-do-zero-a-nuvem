beforeEach(() => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
});

it('exibe mensagem de erro ao submeter o formulario vazio', () => {

    cy.get('button[type="submit"]').click();

    cy.get('.error').should('be.visible')
    
});
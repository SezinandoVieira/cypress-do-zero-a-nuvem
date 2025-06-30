it('testando com comandos personalizados', () => {

    cy.DefaultVisit();

    cy.fillMandatoryFieldsAndSubmit();

    cy.get('.success').should('be.visible')
    
});
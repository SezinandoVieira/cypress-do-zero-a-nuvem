Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

    cy.get('[id=firstName]').type('Sezinando', { delay:0 });

    cy.get('[id=lastName]').type('Vieira', { delay:0 });
       
    cy.get('[id=email]').type('teste@teste.com', { delay:0 });

    const texto = Cypress._.repeat('Esse texto, muito texto, cheio de texto, que é texto', 7)
    cy.get('[id=open-text-area]').type(texto, { delay:0 })

    cy.get('button[type="submit"]').click()

});

Cypress.Commands.add('DefaultVisit', () => {

    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

})
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firtsname: 'Clovis',
    lastName: 'Barros',
    email: 'clovis@barros.com.br',
}) => {

    cy.get('[id=firstName]').type(data.firtsname, { delay:0 });

    cy.get('[id=lastName]').type(data.lastName, { delay:0 });
       
    cy.get('[id=email]').type(data.email, { delay:0 });

    const texto = Cypress._.repeat('Esse texto, muito texto, cheio de texto, que é texto', 7)
    cy.get('[id=open-text-area]').type(texto, { delay:0 })

    //utilizando o contains é uma opção para localizar um elemento que só tem o texto que o mesmo possui, como forma de localiza-lo, então
    //você utiliza o tipo de conteudo, neste exemplo é um botão, e em seguida o texto dele
    cy.contains('button', 'Enviar').click()

});

Cypress.Commands.add('DefaultVisit', () => {

    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

})
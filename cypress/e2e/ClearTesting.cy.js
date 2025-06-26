beforeEach(() => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
});

it('Testando o preenchimento e limpeza dos campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName')
    .as('nome')
    .type('Tubislanio')

    cy.get('@nome').should('have.value','Tubislanio')
    cy.get('@nome').clear().should('have.value','')

    cy.get('#lastName')
    .as('sobrenome')
    .type('Carrapatildo')

    cy.get('@sobrenome').should('have.value','Carrapatildo')
    cy.get('@sobrenome').clear().should('have.value','')

    cy.get('#email')
    .as('mail')
    .type('teste@teste.com')

    cy.get('@mail').should('have.value','teste@teste.com')
    cy.get('@mail').clear().should('have.value','')

    cy.get('#phone')
    .as('phone')
    .type(123456)
     
    cy.get('@phone').should('have.value', 123456)
    cy.get('@phone').clear().should('have.value', '')
});
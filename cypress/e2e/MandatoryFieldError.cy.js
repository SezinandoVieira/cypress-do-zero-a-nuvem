/* Aqui vai ocorrer a simulação de um erro, ao selecionar o campo de contato preferencial como telefone
   e deixar o campo vazio, é esperado que se apareça uma mensagem de erro
 */

beforeEach(() => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
});

it('Deixando o campo de telefone vazio quando ele é obrigatorio', () => {

    cy.get('#firstName').type('Jobislanio');
    cy.get('#lastName').type('Utonisvaldo');
    cy.get('[for="phone-checkbox"]').click();
    cy.get('#open-text-area').type('um texto textiado');
    cy.get('.button[type="submit"]').click();
    
    cy.get('.error').should('be.visible')
});
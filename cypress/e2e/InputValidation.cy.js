/* Para verificar se um campo está recebendo o tipo de dado correto, pode-se utilizar o ".should('have.value', '')" 
   Colocando um espaço vazio no campo em que se espera o valor, faz com que você diga ao cypress
   como no exemplo abaixo que: como o campo de telefone só deve receber entrada do tipo numerico, se ao colocar uma string
   o campo continuar vazio, significa que sua limitação está funcionando como deveria funcionar.
*/
beforeEach(() => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
});

it('Verificando se ao digitar strings no campo de telefone, o mesmo continua vazio', () => {

    cy.get('#phone')
    .type('um nome')
    .should('have.value', '')

});
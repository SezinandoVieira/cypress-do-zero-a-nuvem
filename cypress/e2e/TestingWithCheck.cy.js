beforeEach(() => {

    cy.DefaultVisit();

});

it('marca o tipo de atendimento "Feedback"', () => {

    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked', 'Feedback')

});

it('marca cada tipo de atendimento', () => {
    //neste exemplo, eu utilizei os inputs do tipo "checkbox"
    //como na aplicação de exemplo existem apenas 2 botoes com esse tipo de input, o cypress pega os dois automaticamente
    cy.get('input[type="radio"]') 
    //como o each só funciona com uma função, eu defino o parametro dessa função como um nome familiar para o exemplo
    .each(tipoSuporte =>{ //aqui como foram encontrados 2 checkboxes, eles já são associados automaticamente ao parametro da função
        cy.wrap(tipoSuporte) //aqui eu estou encapsulando os dois checkboxes que o cypress encontrou para poder utilizar outros comandos do cypress
        .check() //que nesse caso é o .check para marcar as duas opções que foram encontradas com o .get()
        .should('be.checked') //e aqui estou me certificando que no final de cada interação, seja verificado que o botão foi marcado
    })
});

it.only('marca ambos checkboxes, depois desmarca o último', () => {
    
    /* cy.get('input[type="checkbox"]')
    .each(tipoContatos =>{
        cy.wrap(tipoContatos)
        .check()
        .should('be.checked', 'E-mail')
        .should('be.checked', 'Telefone')
        })
    .as('check') */
    
    /* cy.get('@check')
    .last()
    .uncheck() */

    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should("not.be.checked")

});





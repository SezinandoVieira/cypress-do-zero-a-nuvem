beforeEach(() => {
    cy.DefaultVisit();
});

it('testando politica de privacidade', () => {
    
    cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')
    
});

it.only('testando link removendo o target', () => {
    //Aqui eu estou verificando que ele está pegando o atributo correto e o valor correto também
    cy.contains('a', 'Política de Privacidade')
    //aqui eu estou removendo o atributo target para que ele possa abrir na mesma aba
    .invoke('removeAttr', 'target')
    //e já que eu quero que ele abra na mesma aba, eu tenho que garantir que o clique seja feito
    .click()

    //Aqui eu estou verificando se realmente ele foi para a pagina verificando o titulo pelo h1, já que por questões de semantica, só deve haver 1 h1 por pagina
    cy.contains('h1', 'CAC TAT - Política de Privacidade')
    //e aqui é uma medida a mais para ver se realmente estou na página que eu quero
    .should('be.visible')

});
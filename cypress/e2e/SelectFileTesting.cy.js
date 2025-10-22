beforeEach(() => {
    cy.DefaultVisit();
});

it('Testando o upload de arquivos, selecionando o mesmo', () => {
    
    /* cy.fixture('example.json')
    .as('arquivo')
    .get('input[type=file]')
    .selectFile('@arquivo')
    .should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
    }) */

    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should(input =>{
        expect(input[0].files[0].name).to.equal('example.json')
    })

});

it('drag-and-drop simulation', () => {

    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json', { action:'drag-drop' })
    .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
    
});

it('alias example', () => {
    cy.fixture("example.json").as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
});

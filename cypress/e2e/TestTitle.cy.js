describe('Testes CAC-TAT', () => {
  it('Testando a visita e titulo do site', () => {
    cy.visit('./src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  })
})
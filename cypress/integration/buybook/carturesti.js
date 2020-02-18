describe('Buy book on carturesti', function() {
    it('Visit catalog page', function() {
        cy.visit('https://carturesti.ro/raft/carte-109') 

        cy.get('.cookieInfo > button').click()

        cy.get('.md-title').first().click()

        cy.get('.adauga-in-cos > .ng-scope').click()

        cy.get('.checkout__icon').click()
        
        cy.contains('Finalizare comandă').click({force: true})
    })
})
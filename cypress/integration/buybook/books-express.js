describe('Buy book on books-express', function() {
    it('Visit catalog page', function() {

        cy.visit('https://www.books-express.ro/carti/calculatoare-si-it/u') 

        cy.get('.cc-btn').click({force: true})

        cy.get(':nth-child(8) > ul > :nth-child(1) > .cover > img').click()
    })
})
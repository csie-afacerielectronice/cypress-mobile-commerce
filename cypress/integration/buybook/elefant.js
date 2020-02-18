describe('Buy book on elefant', function() {
    it('Visit catalog page', function() {
        cy.visit('https://www.elefant.ro/list/carti/carte') 

        cy.contains('Am inteles').click()

        cy.get('.product-tile > .product-image-container > a > img').last().click({force: true})

    })
})
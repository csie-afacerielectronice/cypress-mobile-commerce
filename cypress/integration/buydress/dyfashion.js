describe('Buy dress', function() {
    it('Visit catalog page', function() {
        cy.visit('https://www.dyfashion.ro/rochii/') 

        //select the first product
        cy.get(':nth-child(1) > .product > .productImage > a > .first-show').click()

        //choose size
        cy.get('.list.size_box a').first().click()

        //add to basket
        cy.contains('Adauga in cos').click()

        cy.contains('Finalizează comanda').click()
    })
})
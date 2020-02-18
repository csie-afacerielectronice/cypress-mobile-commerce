describe('Buy dress', function() {
    it('Visit catalog page', function() {
        cy.visit('https://www.fashiondays.ro/g/femei-/imbracaminte-rochii') 

        cy.contains('Sunt de acord').click()

        //click on the first product
        cy.get('.campaign-item > .campaign-photo ').first().click()

        //select size
        cy.get('#sizeContainer label').first().click()

        cy.get('#buy-box').click({force: true})

        cy.scrollTo(0, 0)

        cy.get('#customer-basket > .container-icon > .icon').click({force: true})

        cy.get('#cartProceedCheckout').click()
    })
})
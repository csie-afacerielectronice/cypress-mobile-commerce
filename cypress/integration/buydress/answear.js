describe('Buy dress', function() {
    it('Visit catalog page', function() {
        cy.visit('https://answear.ro/p/rochii-si-tunici-212-k.html') 

        cy.get('#cookiesClose').click()

        cy.get(':nth-child(1) > .inner > .thumb > .thumbRatio > .ratio > .first').click()

        cy.get('#cartaddButton').click()
    })
})
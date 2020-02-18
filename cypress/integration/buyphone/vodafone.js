describe('Buy phone', function() {
    it('Visit phones page', function() {
        cy.visit('https://www.vodafone.ro/telefoane') 

        cy.get('#js-phoneListingCard-0 > .ProductPhonestyle__ProductPhoneWrapper-jft5we-0 > :nth-child(1)').click()
        
        cy.scrollTo(0, 250)

        cy.get('#buy-product').click({force: true})

        cy.get('.d-block > #js-cartButtonFinishOrder > .prod27').click()
    })
  })
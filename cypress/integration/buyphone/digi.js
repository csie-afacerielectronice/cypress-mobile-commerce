describe('Buy phone', function() {
    it('Visit phones page', function() {
        cy.visit('https://www.digiromania.ro/magazin-online') 

        cy.get('.container > .gdpr-trigger').click()

        cy.get('.product-box-link.gtm-product-click').first().click({force: true})

        cy.get('#order-button-mobile-3').click()
    
    })
  })
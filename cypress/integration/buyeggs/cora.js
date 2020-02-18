describe('Buy egss on megaimage', function() {
    it('Visit eggs page', function() {
        cy.visit('https://www.cora.ro/alimente/oua') 

        cy.contains("Am inteles").click()
    })
  })
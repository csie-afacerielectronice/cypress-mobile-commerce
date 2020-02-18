describe('Buy egss on megaimage', function() {
    it('Visit eggs page', function() {
        cy.visit('https://carrefour.ro/supermarket-online/lactate-si-oua/oua') 

        cy.get('.optanon-button-allow > .optanon-alert-box-button-middle').click()

        cy.contains("Adauga").click()

        cy.visit('https://carrefour.ro/unified-front/cart')

        cy.contains("Pasul urmator").click()
    })
  })
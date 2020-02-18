describe('Buy phone', function() {
    it('Visit phones page', function() {
        cy.visit('https://www.orange.ro/magazin-online/telefoane') 

        cy.get(':nth-child(1) > .ws-product > es-product-card > :nth-child(7) > a > .btn').click()

        cy.get('span.oroprice > .col-md-4 > .btn').click()

        cy.contains('Număr nou').click()

        cy.get('#_subs_list_WAR_webshopportlets_add12337').click()
    })
})
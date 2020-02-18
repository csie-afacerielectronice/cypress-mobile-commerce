describe('Buy phone', function() {
    it('Visit phones page', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log("Catched exception");
            return false;
        });

        cy.visit('https://www.telekom.ro/promotie-smartphones/') 

        cy.get('#CybotCookiebotDialogBodyButtonAccept').click()

        cy.contains('Adaugă în coș').click()

        cy.get('.col-sm-5 > #proceedToCheckout').click()
    })
  })
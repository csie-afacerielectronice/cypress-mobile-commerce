describe('Buy egss on megaimage', function() {
    it('Visit eggs page', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log("Catched exception");
            return false;
        });

        cy.server()
        cy.route('cart/amendCart.json').as('addToCart')

        cy.visit('https://www.mega-image.ro/Lactate-si-oua/Oua/c/002005') 

        cy.get('.Cookie-buttons > .btn').click()

        cy.contains("Adauga").click()
        
        cy.wait(2000)

        cy.visit('https://www.mega-image.ro/checkout')
    })
  })
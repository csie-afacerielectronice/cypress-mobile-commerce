describe('Buy book on cartepedia', function() {
    it('Visit catalog page', function() {

        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log("Catched exception");
            return false;
        });

        cy.visit('https://www.cartepedia.ro/carte/fictiune-literatura-96/filtre/') 

        //had to remove this interstitial to move forward
        cy.get('.lightbox_sign').click({force: true} )

        //accept cookie policy
        cy.get('.close_cookie_bar').click({force: true} )

        cy.get('.title_prod_new').first().click()

        cy.get('.descriere_carte > .pret > .detalii_pret > input').click()

        cy.get('.cos_icon').click()
    })
})
describe('Buy book on libris', function() {
    it('Visit catalog page', function() {
        cy.visit('https://www.libris.ro/carti/afaceri-economie') 

        //this interstitial keeps poping
        cy.get('#noutatiPopUp > .modal-dialog > .addCosC > #xClose').click({force: true})
        cy.get('.cookiealert-container > .btn').click({force: true})

        cy.get(':nth-child(2) > .linkNumeProd > .titluProdOverflow').click()

        cy.get('#buttons_container > .adToCart_pb > #buton-wish').click({force: true})

        //unable to reach the end of the shopping process

    })
})
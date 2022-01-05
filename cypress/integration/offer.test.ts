describe('Offer test', () => {
    it('Default', () => {
        cy.visit('/')

        cy.contains('Login').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/login')
        cy.get('#username')
            .type('pizza@bharat.com')
            .should('have.value', 'pizza@bharat.com')
        cy.get('#password').type('123123').should('have.value', '123123')
        cy.get('button').click()
        cy.url().should('include', '/home')
        cy.get('.p-1 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-3 .add-button').click()
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
        cy.get('.total').should('contain', '$49.97')
    })
    it('Microsoft', () => {
        cy.visit('/')

        cy.contains('Login').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/login')
        cy.get('#username')
            .type('pizza@microsoft.com')
            .should('have.value', 'pizza@microsoft.com')
        cy.get('#password').type('123123').should('have.value', '123123')
        cy.get('button').click()
        cy.url().should('include', '/home')
        cy.get('.p-1 .add-button').click()
        cy.get('.p-1 .add-button').click()
        cy.get('.p-1 .add-button').click()
        cy.get('.p-3 .add-button').click()
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
        cy.get('.total').should('contain', '$45.97')
    })
    it('Amazon', () => {
        cy.visit('/')

        cy.contains('Login').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/login')
        cy.get('#username')
            .type('pizza@amazon.com')
            .should('have.value', 'pizza@amazon.com')
        cy.get('#password').type('123123').should('have.value', '123123')
        cy.get('button').click()
        cy.url().should('include', '/home')
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-3 .add-button').click()
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
        cy.get('.total').should('contain', '$67.96')
    })
    it('Facebook', () => {
        cy.visit('/')

        cy.contains('Login').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/login')
        cy.get('#username')
            .type('pizza@facebook.com')
            .should('have.value', 'pizza@facebook.com')
        cy.get('#password').type('123123').should('have.value', '123123')
        cy.get('button').click()
        cy.url().should('include', '/home')
        cy.get('.p-1 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.get('.p-2 .add-button').click()
        cy.contains('Checkout').click()
        cy.url().should('include', '/checkout')
        cy.get('.total').should('contain', '$75.95')
    })
})

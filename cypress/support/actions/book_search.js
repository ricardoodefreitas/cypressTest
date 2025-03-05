Cypress.Commands.add("searchBook", (isbn_10) => {
    cy.get('#twotabsearchtextbox').should('be.visible').type(isbn_10, {delay: 0})
})

Cypress.Commands.add("btnSearch", () => {
    cy.get('#nav-search-submit-button').click()
})

Cypress.Commands.add("foundBook", (book_name) => {
    cy.contains('span', `${book_name}`).should('be.visible').click()
})

Cypress.Commands.add("foundBook", (book_name) => {
    cy.contains('span', `${book_name}`).should('be.visible').click()
})

Cypress.Commands.add("validateAuthor", (author_name) => {
    cy.get('#bylineInfo').should('be.visible').should('contain',`${author_name}`)
})

Cypress.Commands.add("addCart", () => {
    cy.get('#add-to-cart-button').should('be.visible').click()
})

Cypress.Commands.add("book_version", (version_book) => {
    cy.get('#bylineInfo').should('be.visible').should('contain',`${version_book}`)
})

Cypress.Commands.add("book_type", (type_book) => {
    cy.get('#a-autoid-2-announce').should('be.visible').should('contain', `${type_book}`).click()
})

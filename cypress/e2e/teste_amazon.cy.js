import books from '../fixtures/data_books.json'

describe('Validar adição de um item ao carrinho no site da amazon', () => {
  it('Adicionar um livro ao carrinho e verificar a mensagem de adicionado no carrinho', () => {
    cy.visit('/')
    cy.searchBook(books[0].isbn_10)
    cy.btnSearch()
    cy.foundBook(books[0].title)
    cy.validateAuthor(books[0].author)
    cy.book_version(books[0].edition)
    cy.book_type(books[0].type)
    cy.addCart()
    cy.contains('h1', 'Adicionado ao carrinho').should('be.visible')
  })
})
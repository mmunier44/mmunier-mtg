'use strict'

const config = require('../config.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteBook = (event) => {
  event.preventDefault()
  const bookId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure you want to delete this book?')) {
    api.deleteBook(bookId)
      .then(() => onGetBooks(event))
      .catch(ui.failure)
  }
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  addHandlers
}

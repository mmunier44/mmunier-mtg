'use strict'

const config = require('../config.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetCards = (event) => {
  event.preventDefault()
  api.getCards()
    .then(ui.getCardsSuccess)
    .catch(ui.failure)
}

const onClearCards = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteCard = (event) => {
  event.preventDefault()
  const cardId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure you want to delete this card?')) {
    api.deleteCard(cardId)
      .then(() => onGetCards(event))
      .catch(ui.failure)
  }
}

const addHandlers = () => {
  $('#getCardsButton').on('click', onGetCards)
  $('#clearCardsButton').on('click', onClearCards)
  $('.content').on('click', 'button', onDeleteCard)
}

module.exports = {
  addHandlers
}

// const onGetBooks = (event) => {
//   event.preventDefault()
//   api.getBooks()
//     .then(ui.getBooksSuccess)
//     .catch(ui.failure)
// }
//
// const onClearBooks = (event) => {
//   event.preventDefault()
//   ui.clearBooks()
// }
// /
// const onDeleteBook = (event) => {
//   event.preventDefault()
//   const bookId = $(event.target).closest('section').data('id')
//   if (confirm('Are you sure you want to delete this book?')) {
//     api.deleteBook(bookId)
//       .then(() => onGetBooks(event))
//       .catch(ui.failure)
//   }
// }

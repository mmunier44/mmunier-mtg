'use strict'

// const config = require('../config.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  $('#message').text('Sign Up Successful')
  // console.log('submitted the form')
  // console.log('event.target:', event.target)
  const data = getFormFields(event.target)
  // console.log('data from the form:', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onPasswordChange = function (event) {
  $('#message').text('Password Changed')
  event.preventDefault()
  // console.log('password changed')
  const data = getFormFields(event.target)

  api.passwordChange(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeInFail)
}

const onSignOut = function (event) {
  $('#message').text('Sign Out Successful')
  event.preventDefault()
  // console.log('Signed Out')
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onListCards = function (event) {
  $('#message').text('Cards List Loaded')
  event.preventDefault()
  console.log('Cards Shown')
  // const data = getFormFields(event.target)

  api.listCards()
    .then(ui.listCardsSuccess)
    .catch(ui.listCardsFail)
}

const onShowCard = function (event) {
  $('#message').text('Card Shown')
  event.preventDefault()
  // console.log('Card Shown')
  // let id
  // id = getFormFields(event.target).id
  // const data = getFormFields(event.target)

  api.showCard()
    .then(ui.showCardSuccess)
    .catch(ui.showCardFail)
}

const onUpdateMove = (event) => {
  event.preventDefault()
  console.log('event logged', event)
  const data = getFormFields(event.target)
  console.log('store.card.id', store.card.id)
  console.log('store check', store)
  console.log('data check', data)
  console.log('data.card', data.card)
  console.log(data)
  api.updateMove(data)
    .then(ui.updateMoveSuccess)
    .catch(ui.updateMoveFail)
}

const onNewCard = function (data, event) {
  $('table').removeClass('hide')
  console.log('newcardworking?')
  // console.log('check data', data)
  $('#message').text('New Card!')
  api.newCard(event)
    .then(ui.newCardSuccess)
    .catch(ui.newCardFail)
}

const onSignIn = function (event) {
  $('#message').text('Sign In Successful')
  event.preventDefault()
  // console.log('signed in')
  const data = getFormFields(event.target)
  // console.log('sign in data', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

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
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  $('#list-games').on('submit', onListCards)
  $('#create-game').on('submit', onNewCard)
  $('#show-game').on('submit', onShowCard)
  // $('.cell').on('click,onGameboard')
  $('#new-game').on('click', onNewCard)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onNewCard,
  onUpdateMove,
  onShowCard,
  onListCards,
  onSignOut,
  onPasswordChange
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

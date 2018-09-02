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

const onSignIn = function (event) {
  $('#message').text('Sign In Successful')
  event.preventDefault()
  // console.log('signed in')
  const data = getFormFields(event.target)
  console.log('data.card', data)
  console.log('data.card.', data.card)
  console.log('store', store)
  data.card = store.card
  // console.log('sign in data', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
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

const onApiIndex = function (event) {
  $('#message').text('Cards List Api Pinged')
  event.preventDefault()
  console.log('event', event)
  // const data = getFormFields(event.target)

  api.apiIndex()
    .then(ui.apiIndexSuccess)
    .catch(ui.apiIndexFail)
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

const onUpdateCard = (event) => {
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

// const onUpdateMove = (event) => {
//   event.preventDefault()
//   console.log('event logged', event)
//   const data = getFormFields(event.target)
//   console.log('store.card.id', store.card.id)
//   console.log('store check', store)
//   console.log('data check', data)
//   console.log('data.card', data.card)
//   console.log(data)
//   api.updateMove(data)
//     .then(ui.updateMoveSuccess)
//     .catch(ui.updateMoveFail)
// }


const onGetCards = (event) => {
  event.preventDefault()
  api.getCards()
    .then(ui.getCardsSuccess)
    .catch(ui.failure)
}

const onNewCard = function (event) {
  $('table').removeClass('hide')
  console.log('newcardworking?')
  const data = getFormFields(event.target)
  // data.card.id = store.card.id
  // console.log('check data', data)
  $('#message').text('New Card!')
  api.newCard(data)
    .then(ui.newCardSuccess)
    .catch(ui.newCardFail)
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
  $('#show-card').on('click', onGetCards)
  $('#api-index').on('click', onApiIndex)
  $('#clearCardsButton').on('click', onClearCards)
  $('#create-card').on('click', onNewCard)
  // $('.content').on('click', 'button', onDeleteCard)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  // $('#list-cards').on('submit', onListCards)
  $('#create-card').on('submit', onNewCard)
  $('#show-card').on('submit', onShowCard)
  // $('.cell').on('click,onGameboard')
  // $('#new-game').on('click', onNewCard)
}

module.exports = {
  onApiIndex,
  addHandlers,
  onSignUp,
  onSignIn,
  onNewCard,
  onUpdateCard,
  onShowCard,
  // onListCards,
  onSignOut,
  onPasswordChange,
  onDeleteCard
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

'use strict'

const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// Note login credentials being stored
const onSignUp = function (event) {
  // $('#message').text('Sign Up Successful')
  event.preventDefault()
  const data = getFormFields(event.target)
  store.credentials = data
  api.signUp(data)
    .then(onSignUpIn)
    .catch(ui.signUpFail)
}

// Note Datawithout PC being drawn from store.credentials
const onSignUpIn = function (event) {
  delete store.credentials.password_confirmation
  const dataWithoutPC = store.credentials
  api.signIn(dataWithoutPC)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// const onSignUp = function (event) {
//   $('#message').text('Sign In Successful')
//   event.preventDefault()
//   $('#message').text('Sign Up Successful')
//   // console.log('submitted the form')
//   // console.log('event.target:', event.target)
//   const data = getFormFields(event.target)
//   // console.log('data from the form:', data)
//
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFail)
// }

const onSignIn = function (event) {
  // $('#message').text('Sign In Successful')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onPasswordChange = function (event) {
  // $('#message').text('Password Changed')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.passwordChange(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFail)
}

const onSignOut = function (event) {
  $('#message').text('Sign Out Successful')
  event.preventDefault()
  const data = getFormFields(event.target)
  $('#message').val('')

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onApiIndex = function (event) {
  $('#message').text('Cards List Api Pinged')
  event.preventDefault()
  console.log('event', event)

  api.apiIndex()
    .then(ui.apiIndexSuccess)
    .catch(ui.apiIndexFail)
}

const onShowCard = function (event) {
  $('#message').text('Card Shown')
  event.preventDefault()
  // console.log('Card Shown')
  // let id
  const cardId = getFormFields(event.target).cardId
  // const data = getFormFields(event.target)

  api.showCard(cardId)
    .then(ui.showCardSuccess)
    .catch(ui.showCardFail)
}

const onNewCard = (event) => {
  // $('table').removeClass('hide')
  event.preventDefault()
  console.log('newcardworking?')
  const data = getFormFields(event.target)
  console.log(event)
  // const card = getFormFields(event.target)
  // const cardId = getFormFields(event.target)
  console.log(data)
  // data.card.id = store.card.id
  // console.log('check data', data)
  $('#message').text('New Card!')
  // data.user.card = store.user.card
  // data.card = store.card
  api.newCard(data)
    .then(ui.newCardSuccess)
    .catch(ui.newCardFail)
}

// }

const onGetCardsHandlebar = (event) => {
  event.preventDefault()
  api.getCardsHandlebar()
    .then(ui.getCardsHandlebarSuccess)
    .catch(ui.failure)
}

const onGetCardHandlebar = (event) => {
  event.preventDefault()
  const cardId = getFormFields(event.target).cardId
  console.log(cardId)
  delete store.cardId
  api.getCardHandlebar(cardId)
  // console.log(cardId)
    .then(ui.getCardHandlebarSuccess)
    .catch(ui.failure)
}

const onClearCards = (event) => {
  event.preventDefault()
  ui.clearCards()
}

const onUpdateCard = (event) => {
  event.preventDefault()
  console.log('event logged', event)
  const data = getFormFields(event.target)
  console.log('store.cardId', store.cardId)
  console.log('store check', store)
  console.log('data check', data)
  console.log('data.card', data.card)
  console.log(data)
  api.updateCard(data)
    .then(ui.updateCardSuccess)
    .catch(ui.updateCardFail)
}

const onDeleteCard = (event) => {
  event.preventDefault()
  console.log(event)
  // const cardId = getFormFields(event.target).cardId
  const cardId =
  $(event.target).closest('section').data('id')
  // console.log(data)
  // const cardId = data
  // if (confirm('Are you sure you want to delete this card?')) {
  api.deleteCard(cardId)
    // .then(() => onGetCards(event))
    .then(ui.deleteCardSuccess)
    .catch(ui.deleteCardFail)
}

const addHandlers = () => {
  $('#getCardsButton').on('click', onGetCardsHandlebar)
  // $('#show-card').on('click', onShowCard)
  $('#api-index').on('submit', onApiIndex)
  $('#clearCardsButton').on('click', onClearCards)
  // $('#create-card').on('click', onNewCard)
  // $('.content').on('click', 'button', onDeleteCardHandlebar)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  // $('#list-cards').on('submit', onListCards)
  $('#create-card').on('submit', onNewCard)
  $('#show-card').on('submit', onGetCardHandlebar)
  $('#update-card').on('submit', onUpdateCard)
  $('#content').on('click', 'button.delete', onDeleteCard)
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
  onDeleteCard,
  onGetCardsHandlebar,
  onClearCards,
  onGetCardHandlebar
  // onDeleteCardHandlebar
}

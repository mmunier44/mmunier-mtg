'use strict'

// const config = require('../config.js')
const store = require('../store.js')

// const cardlogic = require('./cardlogic.js')

const showCardsTemplate =
require('../templates/cards-listing.handlebars')

const showCardTemplate =
require('../templates/card-listing.handlebars')

const signUpSuccess = (data) => {
  $('#message').text('Successful Signup')
  $('#message').removeClass()
  $('#sign-up input').val('')
  $('#sign-up').addClass('d-none')
}

const signUpFail = function () {
  $('#message').text('Signup Failed')
  $('#mesage').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
}

const signInSuccess = (response) => {
  $('#message').text('Successful Sign In')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  $('#change-password input').val('')
  $('#sign-up input').val('')
  store.user = response.user
  $('#change-password').removeClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('#sign-up').addClass('d-none')
  $('#sign-in').addClass('d-none')
  $('#new-card').removeClass('d-none')
  $('#list-cards').removeClass('d-none')
  $('#getCardsButton').removeClass('d-none')
  $('#clearCardsButton').removeClass('d-none')
  $('#create-card').removeClass('d-none')
  $('#update-card').removeClass('d-none')
  $('#show-card').removeClass('d-none')
  $('#delete-card').removeClass('d-none')
  $('.content').removeClass('d-none')
  console.log('store.user', store.user)
  // console.log('data.user', data.user)
}

const signInFail = function () {
  $('#message').text('Sign In Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
}

const passwordChangeSuccess = (response) => {
  $('#message').text('Successful Password Change')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password input').val('')
  $('#change-password').addClass('d-none')
}

const passwordChangeFail = function () {
  $('#message').text('Password Change Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#change-password input').val('')
}

const signOutSuccess = (response) => {
  $('#message').text('Successful Sign Out')
  $('#message').removeClass()
  $('message').val('')
  $('#message').addClass('success')
  $('#sign-in input').val('')
  $('#change-password').addClass('d-none')
  $('#sign-up').removeClass('d-none')
  $('#new-card').addClass('d-none')
  $('#sign-in').removeClass('d-none')
  $('#sign-out').addClass('d-none')
  $('#new-card').addClass('d-none')
  $('#list-cards').addClass('d-none')
  $('#getCardsButton').addClass('d-none')
  $('#clearCardsButton').addClass('d-none')
  $('#create-card').addClass('d-none')
  $('#update-card').addClass('d-none')
  $('#show-card').addClass('d-none')
  $('#delete-card').addClass('d-none')
  $('.content').addClass('d-none')
  $('#sign-up input').val('')
}

const signOutFail = (response) => {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  // console.log('signoutFail ran')
}

const apiIndexSuccess = (response) => {
  console.log(response)
  $('#message').text('Api Index Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('apiIndexSuccess ran')
  console.log('apiIndexSuccess')
  // const showCardsHtml = showCardsTemplate({ cards: data.cards })
  // $('.content').append(content)
}

const apiIndexFail = () => {
  $('#message').text('Api Index Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  console.log('apiIndexFail ran')
}

const showCardSuccess = (response) => {
  console.log('showcardresponse', response)
  store.card = response.card
  $('#message').text('Show Card Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#show-cards input').val('')
  console.log('showcardsucces', response)
  // console.log(data)
  // console.log('showCardSuccess ran')
}

const showCardFail = () => {
  console.log('showcardfailer')
  $('#message').text('Show Cards Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#show-cards input').val('')
  $('#message').text('Card does not exist')
  // console.log('showCardFail ran')
}

// note added store.card = reponse.card
const newCardSuccess = (response) => {
  // console.log('cardid', data.card.id)
  // store.card = data.card
  store.card = response.card
  $('#message').text('Create Card Success')
  console.log('NewSuccess ran')
  console.log('store', store)
  console.log('response', response)
  console.log(response.card)
  $('#create-card input').val('')
}

const newCardFail = () => {
  $('#message').text('Create Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  console.log('newCardFail ran')
  console.log('create card failed')
  // $('#create-card input').val('')
}

const updateCardSuccess = (response) => {
  console.log('updateCardSuccess', response)
  $('#message').text('Update Card Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('updatecardsuccess', response)
  $('#update-card input').val('')
}

const updateCardFail = () => {
  $('#update-card input').val('')
  $('#message').text('Update Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#update-card input').val('')
  $('#message').text('Card does not update, or you did not create it')
  console.log('updateCardFail ran')
}

const deleteCardSuccess = (response) => {
  console.log(response)
  $('#delete-card input').val('')
  $('#message').text('Card has been deleted')
  // $('#message').text('Update Card Success')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  console.log('deleteCardSuccess', response)
}

const deleteCardFail = (response) => {
  console.log(response)
  $('#delete-card input').val('')
  // $('#message').text('Update Card Success')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  console.log('deleteCardFail', response)
  $('#message').text('Card does not exist or you did not create the card')
}

const clearCards = () => {
  console.log(event)
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const getCardsHandlebarSuccess = (data) => {
  console.log(data)
  const showCardsHtml = showCardsTemplate({ cards: data.cards })
  $('.content').html(showCardsHtml)
  $('#message').text('All Cards Shown!')
}

const getCardHandlebarSuccess = (data) => {
  console.log(data)
  const showCardHtml = showCardTemplate({ cards: data.cards })
  $('#message').text('1 Card Shown')
  $('#show-card input').val('')
  $('.content').removeClass('d-none')
  $('.content').html(showCardHtml)
}

module.exports = {
  // deleteBookSuccess,
  // getCardsSuccess,
  // getBooksSuccess,
  apiIndexSuccess,
  apiIndexFail,
  clearCards,
  failure,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passwordChangeSuccess,
  passwordChangeFail,
  signOutSuccess,
  signOutFail,
  // listCardsSuccess,
  // listCardsFail,
  updateCardSuccess,
  updateCardFail,
  // updateCard,
  // joinCardSuccess,
  // joinCardFail,
  showCardSuccess,
  showCardFail,
  newCardFail,
  // createCardFail,
  // createCardSuccess,
  newCardSuccess,
  deleteCardSuccess,
  deleteCardFail,
  getCardsHandlebarSuccess,
  getCardHandlebarSuccess
}

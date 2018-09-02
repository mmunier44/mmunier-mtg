'use strict'

// const config = require('../config.js')
const store = require('../store.js')

// const showBooksTemplate =
// require('../templates/book-listing.handlebars')
// const showCardsTemplate =
// require('../templates/card-listing.handlebars')

// const getBooksSuccess = (data) => {
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').append(showBooksHtml)
// }

// const getCardsSuccess = (data) => {
//   const showCardsHtml = showCardsTemplate({ cards: data.cards })
//   $('.content').append(showCardsHtml)
// }

const signUpSuccess = (data) => {
  $('#message').text('Successful Signup')
  $('#message').removeClass()
  $('#sign-up input').val('')
  $('#sign-up').addClass('hide')
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
  store.user = response.user
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#new-card').removeClass('hide')
  $('#list-cards').removeClass('hide')
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
  $('#change-password').addClass('hide')
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
  $('#message').addClass('success')
  $('#sign-in input').val('')
  $('#change-password').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#new-card').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-out').addClass('hide')
}

const signOutFail = (response) => {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  // console.log('signoutFail ran')
}

const apiIndexSuccess = (response) => {
  $('#message').text('List Cards Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('listCardsSuccess ran')
  // const showCardsHtml = showCardsTemplate({ cards: data.cards })
  $('.content').append(content)
}

const apiIndexFail = (response) => {
  $('#message').text('List Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  console.log('listCardsFail ran')
}

const listCardsSuccess = (response) => {
  $('#message').text('List Cards Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#list-cards input').val('')
  // console.log('listCardsSuccess ran')
}

const listCardsFail = (response) => {
  $('#message').text('List Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#list-cards input').val('')
  console.log('listCardsFail ran')
}

const clearBooks = () => {
  console.log(event)
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const createCardSuccess = (data) => {
  console.log('Card ID: ', data.card.id)
  store.card = data.card
  $('table').removeClass('hide')
  console.log('store', store)
  console.log('data.card.id', data.card.id)
  console.log('newstorecard', store.card)
  console.log('newdatacard', data.card)
  $('#message').text('Create Card Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create-cards input').val('')
  console.log('createCardSuccess ran')
  $('#change-password').addClass('hide')
}

const newCardSuccess = (data) => {
  console.log('cardid', data.card.id)
  store.card = data.card
  console.log('store', store)
  console.log('data.card.id', data.card.id)
  console.log('store.card', store.card)
  console.log('data.card', data.card)
  // console.log('card', card)
  // // console.log('id', id)
  // console.log('card.id', card.id)
  // $('#table').show()
}

const newCardFail = (data) => {
}

const createCardFail = (response) => {
  $('#message').text('Create Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-card input').val('')
  // console.log('createCardFail ran')
}

const updateCardSuccess = (data) => {
  $('#message').text('Update Card Success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const updateCardFail = (response) => {
  $('#message').text('Create Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-card input').val('')
  // console.log('createCardFail ran')
}

const showCardSuccess = (response) => {
  $('#message').text('Show Card Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#show-cards input').val('')
  // console.log('showCardSuccess ran')
}

const showCardFail = (response) => {
  $('#message').text('Show Cards Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#show-cards input').val('')
  // console.log('showCardFail ran')
}

const joinCardSuccess = (response) => {
  $('#message').text('Join Card Success')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-cards input').val('')
  // console.log('joinCardSuccess ran')
}

const joinCardFail = (response) => {
  $('#message').text('Join Card Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-cards input').val('')
  // console.log('joinCardFail ran')
}

const updateCard = (data) => {
  console.log('store.card', store.card)
}

module.exports = {
  // deleteBookSuccess,
  // getCardsSuccess,
  // getBooksSuccess,
  apiIndexSuccess,
  apiIndexFail,
  clearBooks,
  failure,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passwordChangeSuccess,
  passwordChangeFail,
  signOutSuccess,
  signOutFail,
  listCardsSuccess,
  listCardsFail,
  updateCardSuccess,
  updateCardFail,
  updateCard,
  joinCardSuccess,
  joinCardFail,
  showCardSuccess,
  showCardFail,
  newCardFail,
  createCardFail,
  createCardSuccess,
  newCardSuccess
}

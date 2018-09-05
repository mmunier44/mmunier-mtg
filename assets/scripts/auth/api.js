'use strict'

const config = require('../config.js')
const store = require('../store.js')

//

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const passwordChange = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  // console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const apiIndex = function () {
  console.log('api index')
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/cards'
  })
}

// Note storing ID number as cardId
const showCard = (cardId) => {
  return $.ajax({
    url: config.apiUrl + '/cards/' + cardId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Note Card object is being sent as data to store
const newCard = (data) => {
  return $.ajax({
    url: config.apiUrl + '/cards',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCard = (data) => {
  return $.ajax({
    data,
    method: 'PATCH',
    url: config.apiUrl + '/cards/' + data.cardId,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
    // 'card': {
    //   'name':
    //   'description'
    // }
  })
}

const deleteCard = (cardId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cards/' + cardId,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getCardsHandlebar = function () {
  console.log('Cards Handlebar')
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/cards'
  })
}

const getCardHandlebar = function (cardId) {
  console.log('1 Card Handlebar')
  return $.ajax({
    url: config.apiUrl + '/cards/' + cardId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

const deleteCardHandlebar = (cardId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cards/' + cardId,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  // getCards,
  deleteCard,
  apiIndex,
  signUp,
  signIn,
  signOut,
  passwordChange,
  // listCards,
  newCard,
  updateCard,
  showCard,
  getCardHandlebar,
  getCardsHandlebar,
  deleteCardHandlebar
  // showAllCards
}

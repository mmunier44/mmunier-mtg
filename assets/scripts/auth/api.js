'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getCards = function () {
  return $.ajax({
    url: config.apiUrl + '/cards'
  })
}

const deleteCards = (cardId) => {
  return $.ajax({
    url: config.apiUrl + '/cards/' + cardId,
    method: 'DELETE'
  })
}

const apiIndex = function () {
  // console.log('api index')
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + 'cards'
  })
}

const signUp = function (data, event) {
  // console.log('api URL is', config.apiUrl)
  // console.log('data', data)
  // console.log('event', event)
  // console.log('store', store)
  // console.log('config', config)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  // console.log('api URL is', config.apiUrl)
  // console.log('data', data)
  // console.log('event', event)
  // console.log('store', store)
  // console.log('config', config)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const passwordChange = function (data) {
  // console.log('store in change password', store)
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
    // data: data
  })
}

const listCards = function (id) {
  // console.log('games list create')
  // console.log(id)
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + 'cards/' + id
  })
}

// note here new card start
// const newCard = () => {
//   return $.ajax({
//     url: config.apiUrl + '/cards',
//     method: 'POST',
//     data: {
//       'card': {
//     },
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const updateCard = (index, value, over) => {
  // console.log('updatemovedata', data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.card.id,
    method: 'PATCH',
    data: {
      'card': {
        'cell': {
          // 'index': `${index}`,
          // 'value': `${value}`,
          // 'over': `${over}`
        }
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCard = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games' + store.user.cards.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      data
    }
  })
}
// note here start adjusting store.user.cards.id
// note check card cards

const showAllCards = () => {
  return $.ajax({
    url: config.apiUrl + '/cards',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCards,
  deleteCards,
  apiIndex,
  signUp,
  signIn,
  signOut,
  passwordChange,
  listCards,
  // newCard,
  updateCard,
  showCard,
  showAllCards
}

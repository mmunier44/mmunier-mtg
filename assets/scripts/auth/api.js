'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

const deleteBook = (bookId) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + bookId,
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
    url: config.apiUrl + 'games'
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

const listGames = function (id) {
  // console.log('games list create')
  // console.log(id)
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + 'games/' + id
  })
}

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMove = (index, value, over) => {
  // console.log('updatemovedata', data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
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

const showGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games' + store.user.games.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      data
    }
  })
}

const showAllGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {

}

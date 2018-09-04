'use strict'

const config = require('../config.js')
const store = require('../store.js')

//

const signUp = function (data) {
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

const showCard = (cardId) => {
  return $.ajax({
    url: config.apiUrl + '/cards/' + cardId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

// note here new card start
// const newCard = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/cards',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

// const newCard = (data) => {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/cards',
//     headers: {
//       // 'Content-Type': 'application/json',
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: {
//
//       })
//     }
//   })
// }

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

// const newCard = (data) => {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/cards',
//     headers: {
//       // 'Content-Type': 'application/json',
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: {
//       'card': {
//         'name':
//         'description:'
//       }
//     }
//   })
// }

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

// const updateCard = (data) => {
//   // console.log('updatemovedata', data)
//   return $.ajax({
//     url: config.apiUrl + '/cards/' + data.cardId,
//     method: 'PATCH',
//     data: {
//       'card': {
//         'name': `${NAME}`,
//         'description': `${DESCRIPTION}`
//       }
//     },
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// const showCard = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/cards' + store.user.cards.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//       data
//     }
//   })
// }

// note here start adjusting store.user.cards.id
// note check card cards

// const showAllCards = () => {
//   return $.ajax({
//     url: config.apiUrl + '/cards',
//     method: 'GET',
//     data: {
//     },
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// // const showAllCards = () => {
// //   return $.ajax({
// //     url: config.apiUrl + '/cards',
// //     method: 'GET',
// //     data: {
// //       'card': {
// //         'name': `${NAME}`,
// //         'description': `${DESCRIPTION}`
// //       }
// //     },
// //     headers: {
// //       Authorization: 'Token token=' + store.user.token
// //     }
// //   })
// // }

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

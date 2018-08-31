'use strict'

const config = require('../config.js')
const store = require('../store.js')

const showBooksTemplate =
require('../templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').append(showBooksHtml)
}

const clearBooks = () => {
  console.log(event)
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  // deleteBookSuccess,
  getBooksSuccess,
  clearBooks,
  failure
}

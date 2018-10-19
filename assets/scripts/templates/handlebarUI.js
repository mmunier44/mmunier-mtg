'use strict'

// const config = require('../config.js')
// const store = require('../store.js')
const api = require('./../auth/api.js')
const ui = require('./../auth/ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')

const onDeleteCardHandlebar = (event) => {
  event.preventDefault()
  console.log(event)
  console.log(event.target)
  // const cardId = getFormFields(event.target).cardId
  const cardId = $(event.target).closest('section').card('id')
  // if (confirm('Are you sure you want to delete this card?')) {
  console.log(cardId)
  api.deleteCard(cardId)
    .then(() => (event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#content').on('submit', onDeleteCardHandlebar)
}

module.exports = {
  addHandlers
}

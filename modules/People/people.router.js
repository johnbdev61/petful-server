const express = require('express')
const jsonBodyParser = express.json()
const people = require('../..//store/people.store')
const Queue = require('../queue/Queue')

const peopleRouter = express.Router()
const peopleQueue = new Queue() //TODO: axe this if it does nothing

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

peopleRouter
  .route('/')
  .get((req, res, next) => {
    shuffleArray(people)
    res.status(200).json(people)
  })
  .post(jsonBodyParser, (req, res, next) => {
    if (!req.body.name) {
      res.status(400).json('Name not included in body')
    }
    let newPerson = req.body.name
    people.push(newPerson)
    res.status(201).json(newPerson)
  })

module.exports = peopleRouter

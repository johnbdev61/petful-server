const express = require('express')
const jsonBodyParser = express.json()
const people = require('../../store/people.store')

const peopleRouter = express.Router()

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
    if (!req.body.person) {
      res.status(400).json('Must enter name')
    }
    let newPerson = req.body.person
    people.push(newPerson)
    res.status(201).json(newPerson)
  })

module.exports = peopleRouter

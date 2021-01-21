const express = require('express')
const dogs = require('../../store/dog.store')
const Queue = require('../queue/Queue')

const dogsRouter = express.Router()
const dogQueue = new Queue()

dogs.forEach((dog) => dogQueue.enqueue(dog))

dogsRouter
  .route('/')
  .get((req, res, next) => {
    FirstDog = dogQueue.first.value
    res.status(200).json(FirstDog)
  })
  .delete((req, res, next) => {
    AdoptedDog = dogQueue.dequeue()
    dogQueue.enqueue(AdoptedDog)
    res.status(200).json(AdoptedDog)
  })

module.exports = dogsRouter

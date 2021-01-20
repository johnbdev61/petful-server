const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../People/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(Pets.get())
})

router.delete('/', json, (req, res) => {
  const { type } = req.body
  try {
    Pets.dequeue(type)
    People.dequeue()
  } catch (e) {
    return res.status(400).json(e.message)
  }
  return res.status(202).send()
})

module.exports = router

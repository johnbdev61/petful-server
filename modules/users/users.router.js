const express = require('express')
const json = require('body-parser').json()

const People = require('./users.service')

const router = express.Router()

router.get('/', (req, res) => {
  const adopters = People.get()
  if (!adopters) {
    return res
      .status(400)
      .json({ error: 'There is nobody in line.' })
  }
  return res.json(adopters)
})

router.post('/', json, (req, res) => {
  const name = req.body.name
  const adopters = People.enqueue(name)
  if (name == null) {
    return res
      .status(400)
      .json({ error: 'Name is required' })
  }
})

module.exports = router

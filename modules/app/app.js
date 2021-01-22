const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config')

const app = express()

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
)

app.use('/people', require('../people/people.router.js'))
app.use('/cats', require('../pets/cat.router.js'))
app.use('/dogs', require('../pets/dog.router.js'))

app.get('/', (req, res) => {
  res.send('Welcome to the Petful API!')
})

module.exports = app

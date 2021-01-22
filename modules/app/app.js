const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config')

const app = express()

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
)

app.use('/people', require('../people/people.router'))
app.use('/cats', require('../pets/cat.router'))
app.use('/dogs', require('../pets/dog.router'))

app.get('/', (req, res) => {
  res.send('Welcome to the Petful API!')
})

module.exports = app

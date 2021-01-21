const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/cats', require('../pets/cat.router'))
app.use('/dogs', require('../pets/dog.router'))

app.get('/', (req, res) => {
  res.send('Welcome to the Petful API!')
})

module.exports = app

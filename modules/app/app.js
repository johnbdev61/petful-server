const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/users', require('../people/people.router'))
app.use('/cats', require('../pets/cat.router'))
app.use('/dogs', require('../pets/dog.router'))

module.exports = app

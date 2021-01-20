const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const parser = require('body-parser')
const peopleRouter = require('../People/people.router')
const petsRouter = require('../pets/pets-router')

const app = express()

app.use(morgan('common'))
app.use(cors())
app.use(parser.json({ strict: false }))

app.use('/people', peopleRouter)
app.use('/cats', petsRouter)
app.use('/dogs', petsRouter)

module.exports = app

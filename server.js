const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const app = require('./modules/app/app')
const peopleRouter = require('./modules/People/people.router')
const petsRouter = require('./modules/People/people.router')
const { NODE_ENV, CLIENT_ORIGIN } = require('./config')

const PORT = process.env.PORT || 8000

const morganSetting = NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganSetting))
app.use(helmet())
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
)

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}.`)
})

app.use('/api/cats', petsRouter)
app.use('/api/dogs', petsRouter)
app.use('/api/people', peopleRouter)

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  })
})

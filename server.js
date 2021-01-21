  const app = require('./modules/app/app')
const { PORT } = require('./config')
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is Listening on ${ PORT }...`)
})

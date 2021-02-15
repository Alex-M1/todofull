import express from 'express'
import config from 'config'
import noteRoute from './routes/notes'

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4300")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  next()
})

app.use('/api/notes', noteRoute)

const PORT = config.get('port') || 5000
app.listen(PORT)

const express = require('express')
const mongoose = require('mongoose')
const portfoliosRoutes = require('./routes/portfolios')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/portfolios', portfoliosRoutes)

const port = process.env.PORT || 4000
const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost/agency-db')
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Listening on port ${port}`))
  } catch (err) {
    console.error(err.message)
  }
}
start()

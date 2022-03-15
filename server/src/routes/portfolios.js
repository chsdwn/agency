const express = require('express')
const Portfolio = require('../models/Portfolio')

const router = express.Router()

router.get('/', async (req, res) => {
  const portfolios = await Portfolio.find()
  res.send(portfolios)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const portfolio = await Portfolio.findById(id)
  res.send(portfolio)
})

router.post('/', async (req, res) => {
  await Portfolio.create(req.body)
  res.status(201).send()
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const body = req.body

  const portfolio = await Portfolio.findById(id)
  portfolio.projectName = body.projectName
  portfolio.title = body.title
  portfolio.description = body.description
  portfolio.imageUrl = body.imageUrl
  portfolio.client = body.client
  portfolio.category = body.category
  await portfolio.save()

  res.send()
})

router.delete('/:id', async (req, res) => {
  await Portfolio.findByIdAndRemove(req.params.id)
  res.send()
})

module.exports = router

let router = require('express').Router()
let Stars = require('../models/star')

//get all
//get one
//create
//delete
//update

router.get('/', (req, res, next) => {
  Stars.find({})
    .then(stars => {
      res.send(stars)
      return
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Stars.findById(req.params.id)
    .then(star => {
      res.send(star)
      return
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Stars.create(req.body)
    .then(star => {
      res.send(star)
      return
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Stars.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Playing god huh?'
    }))
})

router.delete('/:id', (req, res, next) => {
  Stars.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Destroying Planets now I see'
    }))
})

module.exports = router
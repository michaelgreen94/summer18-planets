let router = require('express').Router()
let Moons = require('../models/moon')

router.get('/', (req, res, next) => {
  Moons.find({})
    .then(moons => {
      res.send(moons)
      return
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Moons.findById(req.params.id)
    .then(moon => {
      res.send(moon)
      return
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Moons.create(req.body)
    .then(moon => {
      res.send(moon)
      return
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Moons.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Someone has got to take this ability from you'
    }))
})

router.delete('/:id', (req, res, next) => {
  Moons.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Lets talk about why you done that'
    }))
})


module.exports = router
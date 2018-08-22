let router = require('express').Router()
let Planets = require('../models/planet')

// get
//get one
// post
// put
// delete

router.get('/', (req, res, next) => {
  Planets.find({})
    .then(planets => {
      res.send(planets)
      return
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Planets.findById(req.params.id)
    .then(planet => {
      res.send(planet)
      return
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Planets.create(req.body)
    .then(planet => {
      res.send(planet)
      return
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Planets.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Nice you changed a planet'
    }))
})

router.delete('/:id', (req, res, next) => {
  Planets.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Who gave you that ability?'
    }))
})

module.exports = router
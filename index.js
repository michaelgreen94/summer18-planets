let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


let galaxyRoutes = require('./routes/galaxies')
let starRoutes = require('./routes/stars')
let planetRoutes = require('./routes/planets')
let moonRoutes = require('./routes/moons')
// let speciRoutes = require('./routes/speci')




server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoutes)
server.use('/api/planets', planetRoutes)
server.use('/api/moons', moonRoutes)
// server.use('/api/species/', speciRoutes)


server.use('/api/*', (error, req, res, next) => {
  res.send(error)
})

server.use('*', (req, res, next) => {
  res.status(404).send('NO PAGE FOUND')
})










server.listen(port, () => {
  console.log('SPACE....', port)
})
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'A moon is a celestial body that makes an orbit around a planet' },
  planetId: { type: ObjectId, ref: 'Planet', required: true }
})

module.exports = mongoose.model(schemaName, schema)
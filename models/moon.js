let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Moon'

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'Looks like you\'re just being lazy!' },
  planetId: { type: ObjectId, ref: 'Planet', required: true }
})

module.exports = mongoose.model(schemaName, schema)
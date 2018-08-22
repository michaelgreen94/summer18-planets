let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Planet'

let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'Whats up with not describing your stuff?' },
  starId: { type: ObjectId, ref: 'Star', required: true }
})

module.exports = mongoose.model(schemaName, schema)
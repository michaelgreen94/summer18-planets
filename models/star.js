let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Star'


let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: 'A star is a luminous ball of gas, mostly hydrogen and helium, held together by its own gravity.' },
  color: {
    type: String,
    enum: [
      'red',
      'yellow',
      'blue',
      'orange',
      'white',
      'black'
    ],
    required: true
  },
  galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
})

module.exports = mongoose.model(schemaName, schema)
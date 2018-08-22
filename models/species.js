let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Species'

let schema = new Schema({

})

module.exports = mongoose.model(schemaName, schema)
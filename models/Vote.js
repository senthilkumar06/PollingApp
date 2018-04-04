const mongoose = require('mongoose')
const Schema = mongoose.Schema
const voteSchema = new Schema({
    os: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }

})

// Create collection and add schema
const Vote = mongoose.model('Schema', voteSchema)

module.exports = Vote;
const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
    message: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('todo', schema)
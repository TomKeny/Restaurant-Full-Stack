// to define what the todoItem will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const orderSchema = new Schema({
    UserID: {
        type: String,
        required: true
    },
    ItemID: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)
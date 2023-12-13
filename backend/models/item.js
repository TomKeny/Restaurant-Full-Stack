// to define what the todoItem will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const itemSchema = new Schema({
    FoodName: {
        type: String,
        required: true
    },
    ServingSize: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)
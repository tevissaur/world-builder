const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    name: {
        type: String,
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
})

const City = model('City', citySchema)

module.exports = City
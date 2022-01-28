const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    name: {
        type: String,
    },
    notableCharacters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }
    ]
})

const City = model('City', citySchema)

module.exports = City
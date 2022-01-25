const { Schema, model } = require("mongoose");

const quoteSchema = new Schema({
    quote: {
        type: String,
        trim: true,
        required: "Quote text is required"
    },
    description: {
        source: {
            type: String
        },
        proseType : {
            type: String
        },
    },
    author: {
        type: String,
        ref: 'Character'
    }

})

const Quote = model('Quote', quoteSchema)

module.exports = Quote
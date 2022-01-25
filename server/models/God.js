const { Schema, model } = require('mongoose')


const GodSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a name.'
    },
    description: {
        type: String,
        required: 'What does this god represent?'
    },
    domains: [
        {
            type: String
        }
    ],
    symbol: {
        type: String,
        required: 'Enter a symbol, please.'
    },
    religion: {
        type: Schema.Types.ObjectId,
        ref: 'Religion'
    },
    alignment: {
        type: String
    }
})

const God = model('God', GodSchema)

module.exports = God
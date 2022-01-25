const { Schema, model } = require("mongoose");


const ReligionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter a name for this religion"
    },
    description: {
        type: String
    },
    gods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'God'
        }
    ]
})

const Religion = model('Religion', ReligionSchema)

module.exports = Religion

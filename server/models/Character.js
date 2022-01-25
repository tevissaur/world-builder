const { Schema, model } = require("mongoose");

const CharacterSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Character name is required"
    },
    description: {
        type: String
    },
    size: {
        type: String
    },
    race: {
        type: Schema.Types.ObjectId,
        ref: 'Race'
    },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    backstory: {
        type: String
    },
    bonds: [String],
    goals: [String],
    fears: [String]
})

const Character = model('Character', CharacterSchema)

module.exports = Character
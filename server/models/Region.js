const { Schema, model } = require("mongoose");

const regionSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of the race"
    },
    description: {
        type: String
    },
    countries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        }
    ],
    monsters: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Monster'
        }
    ],
    landmarks: [
        {
            name: String,
            description: String
        }
    ]
});

const Region = model('Region', regionSchema)

module.exports = Region
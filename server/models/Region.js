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
            type: String,
            ref: 'Country'
        }
    ],
    monsters: [
        {
            type: String,
            ref: 'Monster'
        }
    ]
});

const Region = model('Region', regionSchema)

module.exports = Region
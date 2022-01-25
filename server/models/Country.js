const { Schema, model } = require("mongoose");


const countrySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Country Name is required"
    },
    religions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Religion'
        }
    ],
    government: {
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Character'
            }
        ],
        style: {
            type: String
        }
    },
    cities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'City'
        }
    ]
})

const Country = model('Country', countrySchema)

module.exports = Country


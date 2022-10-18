const { Schema, model } = require("mongoose");

const orgSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    motives: {
        bonds: [
            {
                type: String
            }
        ],
        goals: [
            {
                type: String
            }
        ],
        fears: [
            {
                type: String
            }
        ]
    },
    members: [
        {
            type: String,
            ref: 'Character'
        }
    ],
    relationships: {
        friends: [
            {
                type: String,
                ref: 'Organization'
            }
        ],
        enemies: [
            {
                type: String,
                ref: 'Organization'
            }
        ]
    },
    activeRegions: [
        {
            type: String,
            ref: 'Region'
        }
    ]
})

const Organization = model('Organization', orgSchema)

module.exports = Organization
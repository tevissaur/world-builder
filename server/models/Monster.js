const { Schema, model } = require("mongoose");

const monsterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    size: {
        type:  String
    },
    regions: [
        {
            type: String,
            ref: 'Region'
        }
    ]
});

const Monster = model('Monster', monsterSchema)

module.exports = Monster
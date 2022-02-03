const { Schema, model } = require("mongoose");


const worldSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "World name is required"
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    religions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Religion'
        }
    ],
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    races: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Race'
        }
    ],
    regions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Region'
        }
    ],
    historicalEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'History'
        }
    ],
    wikiCategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ],
    description: {
        type: String
    },
    characters:[ {
        type: Schema.Types.ObjectId,
        ref: 'Character'
    }]

})

const World = model('World', worldSchema) 

module.exports = World
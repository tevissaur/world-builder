const { Schema, model } = require("mongoose");

const raceSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of the race"
    },
    description: {
        type: String
    },
    // subraces: {
    //     name: {
    //         type: String,
    //         required: "Please enter the name of the subrace"
    //     },
    //     description: {
    //         type: String
    //     }
    // }
});

const Race = model('Race', raceSchema)

module.exports = Race
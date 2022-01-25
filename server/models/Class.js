const { Schema, model } = require("mongoose");

const classSchema = new Schema({
    name: {
        type: String,
        required: "Please enter the name of the race"
    },
    description: {
        type: String
    },
    // subclasses: {
    //     name: {
    //         type: String,
    //         required: "Please enter the name of the subrace"
    //     },
    //     description: {
    //         type: String
    //     }
    // }
});

const Class = model('Class', classSchema)

module.exports = Class
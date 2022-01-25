const { Schema, model } = require("mongoose");

const historySchema = new Schema({
    eventName: {
        type: String,
        required: "Please enter a name for the historical event",
        trim: true
    },
    year: {
        type: Number,
        required: "Please enter a year for the event"
    },
    description: {
        type: String,
        required: "Please describe the event"
    }
})

const History = model('History', historySchema)

module.exports = History






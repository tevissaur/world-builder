const { Schema, model } = require("mongoose");


const worldSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Character name is required"
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
import { Schema, model } from "mongoose";

interface ILandmark {
    name: string;
    description: string;
    regions: Array<Schema.Types.ObjectId> 
}


const landmarkSchema = new Schema<ILandmark>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    regions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Region'
        }
    ]
});

const Landmark = model<ILandmark>('Landmark', landmarkSchema)

module.exports = Landmark
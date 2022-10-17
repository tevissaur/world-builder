import { Schema, model } from "mongoose";

interface ICity {
    name: string;
    notableCharacters: Array<Schema.Types.ObjectId>;
    country: Schema.Types.ObjectId;
}


const citySchema = new Schema<ICity>({
    name: {
        type: String,
    },
    notableCharacters: [{
        type: Schema.Types.ObjectId,
        ref: 'Character'
    }],
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
})

const City = model<ICity>('City', citySchema)

export default City
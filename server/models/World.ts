import { Schema, model } from 'mongoose';

interface IWorld {
    name: string;
    creator: Schema.Types.ObjectId;
    religions: Array<Schema.Types.ObjectId>;
    classes: Array<Schema.Types.ObjectId>;
    races: Array<Schema.Types.ObjectId>;
    regions: Array<Schema.Types.ObjectId>;
    historicalEvents: Array<Schema.Types.ObjectId>;
    description: string;
    wiki: Schema.Types.ObjectId;

}

const worldSchema = new Schema<IWorld>({
    name: {
        type: String,
        trim: true,
        required: true
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
    description: {
        type: String
    },
    wiki: {
        type: Schema.Types.ObjectId,
        ref: 'Wiki'
    }
})

const World = model<IWorld>('World', worldSchema) 

export default World
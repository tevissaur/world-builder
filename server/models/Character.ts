import { Schema, model } from 'mongoose';

interface ICharacterClasses {
    class: Schema.Types.ObjectId;
    level: number;
}

interface ICharacter {
    world: Schema.Types.ObjectId;
    creator: Schema.Types.ObjectId;
    name: string;
    description: string;
    size: string;
    race: Schema.Types.ObjectId;
    classes: Array<ICharacterClasses>;
    backstory: string;
    bonds: Array<string>;
    goals: Array<string>;
    fears: Array<string>;
    organizations: Array<Schema.Types.ObjectId>;
    residentCity: Schema.Types.ObjectId;
    isNPC: boolean;
}

const CharacterSchema = new Schema<ICharacter>({
    world: {
        type: Schema.Types.ObjectId,
        ref: 'World'
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    },
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large']
    },
    race: {
        type: Schema.Types.ObjectId,
        ref: 'Race'
    },
    classes: [{
        class: {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        },
        level: {
            type: Number,
            required: true
        }
    }],
    backstory: {
        type: String
    },
    bonds: [String],
    goals: [String],
    fears: [String],
    organizations: [{
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    }],
    residentCity:
    {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    isNPC: {
        type: Boolean,
        default: false
    }
})

const Character = model<ICharacter>('Character', CharacterSchema)

module.exports = Character
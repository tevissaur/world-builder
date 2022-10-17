import { Schema, model } from 'mongoose'


interface IArticle {
    subject: Schema.Types.ObjectId;
    subjectModel: string;
    title: string;
    body: string;
    category: Schema.Types.ObjectId;
}

const ArticleSchema = new Schema<IArticle>({
    subject: {
        type: Schema.Types.ObjectId,
        refPath: 'subjectModel'
    },
    subjectModel: {
        type: String,
        required: true,
        enum: ['']
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const Article = model<IArticle>('Article', ArticleSchema)

module.exports = Article
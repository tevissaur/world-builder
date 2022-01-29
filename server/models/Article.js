const { Schema, model } = require('mongoose')

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Need a title for the article'
    },
    body: {
        type: String,
        trim: true,
        required: 'You want the article to have content, right?'
    }
})

const Article = model('Article', ArticleSchema)

module.exports = Article
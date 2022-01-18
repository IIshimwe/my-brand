import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255
    },
    // img:
    // {
    //     data: Buffer,
    //     contentType: String
    // },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

export default Article;
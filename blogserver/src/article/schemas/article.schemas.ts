import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    //changed for comments 230123
    comments: {type: Array<string>,  required: false},
    //changed for Bewertungen 230123
    Bewertungen: {type: Array<string>,  required: false}
         
});
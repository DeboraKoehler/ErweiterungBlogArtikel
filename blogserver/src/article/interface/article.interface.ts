import { Document } from 'mongoose';

export interface Article extends Document {
    readonly id: number;
    readonly title: string;
    readonly author: string;
    readonly description: string;
    readonly content: string;
    //changed for comments
    comments: Array<string>;
    //changed for Bewertungen 230123
    Bewertungen: Array<String>;
}
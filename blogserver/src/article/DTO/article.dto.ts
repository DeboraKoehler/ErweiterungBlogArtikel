import { ListenOptions } from "net";

export class ArticleDTO {
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
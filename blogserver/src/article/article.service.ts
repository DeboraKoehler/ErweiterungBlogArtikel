import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ArticleDTO } from './DTO/article.dto';
import { Article } from './interface/article.interface';

@Injectable()
export class ArticleService {
    constructor(@Inject('ARTICLE_MODEL') private readonly articleModel: Model<Article>) { }

    async create(articleDto: ArticleDTO): Promise<Article> {
        console.log('Neuen Artikel erzeugen'+articleDto);
        const createdArticle = new this.articleModel(articleDto);
        return await createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        console.log('Alle Artikel liefern');
        return await this.articleModel.find().exec();
    }

    async find(id: number): Promise<Article[] | any> {
        return await this.articleModel.findById(id).exec();
    }

    async update(id: number, articleDto: ArticleDTO): Promise<Article> {
        return await this.articleModel.findByIdAndUpdate(id, articleDto);
    }

    async delete(id: number, articleDto: ArticleDTO): Promise<Article> {
        return await this.articleModel.findByIdAndRemove(id);
    }
}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Article } from '../article';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  article: Article = { _id: '', title: '', author: '', description: '', content: '', updatedAt: new Date() };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.getArticleDetails(this.route.snapshot.params['id']);
  }

  getArticleDetails(id: string) {
    console.log("ArticleDateils ID "+id);
    this.api.getArticle(id)
      .subscribe((data: any) => {
        this.article = data;
        console.log(this.article);
        this.isLoadingResults = false;
      });
  }

  deleteArticle(id: any) {
    this.isLoadingResults = true;
    this.api.deleteArticle(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/articles']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }


}

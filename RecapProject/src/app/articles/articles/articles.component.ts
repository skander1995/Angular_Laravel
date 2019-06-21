
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Article } from 'src/app/Models/Articles';
import { JsonPipe } from '@angular/common';
import { map } from "rxjs/operators";
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
lisarticles:Article[];

  constructor(private service:ArticleService,private router:Router) { }

  ngOnInit() {
    this.getposts();

  }
  getposts()
  {
    //console.log(this.service.getposts());
    this.service.getarticle().subscribe(data => {
      //console.log(data),
      this.lisarticles=data;

      console.log("list ");
      console.log(this.lisarticles);
      //this.list=JSON.stringify(this.listposts);
    });
    
  /**
   *  this.service.getposts().pipe(map(data => {this.listposts=data}));
   console.log(this.listposts);
   */

  

  }
}


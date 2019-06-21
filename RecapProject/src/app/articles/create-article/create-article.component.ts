import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  CreateForm: FormGroup;
  erreur : string ="";
  constructor(private service:ArticleService, private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.CreateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
      })
  }
  create() {
    var title = this.CreateForm.controls.title.value;
    var body = this.CreateForm.controls.description.value;
    var id= "1";
    this.service.addArticle(title,body,id).subscribe(  
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['articles']);
      },
      error => {
        this.erreur=error.error;
        console.log("Error", error);
      }
    );
  }
}

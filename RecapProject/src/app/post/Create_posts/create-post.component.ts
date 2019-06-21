import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/Models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  CreateForm: FormGroup;
  erreur : string ="";
  constructor(private service:PostService, private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.CreateForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
      })
  }
  create() {
    var title = this.CreateForm.controls.title.value;
    var body = this.CreateForm.controls.body.value;
    var id= "1";
    this.service.addPost(title,body,id).subscribe(  
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['posts']);
      },
      error => {
        this.erreur=error.error;
        console.log("Error", error);
      }
    );
  }
}

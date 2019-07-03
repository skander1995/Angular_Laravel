import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/Models/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  CreateForm: FormGroup;
  erreur: string = "";
  fileData: File = null;
  
  constructor(private service: PostService, private fb: FormBuilder, private router: Router) { }

  fileProgress(event) {

    this.fileData = <File>event.target.files[0];
    console.log(this.fileData);
  }
  ngOnInit() {
    
    this.CreateForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      file: ['', Validators.required]
    })
  }
  create() {
    const formData = new FormData();
    var title = this.CreateForm.controls.title.value;
    var body = this.CreateForm.controls.body.value;
    
    formData.append('file', this.fileData);
    formData.append('title', title);
    formData.append('body', body);
    var post = new Post();
    post.body = body;
    post.title = title;
    //post.file=this.fileData;
    this.service.addPost(formData)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.router.navigate(['posts']);
        },
        error => {
          this.erreur = error.error;
          console.log("Error", this.erreur);
        }
      );
  }
}

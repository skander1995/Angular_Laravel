import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/Post';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:PostService,private router:ActivatedRoute) {   
    this.router.params.subscribe(params => {
      this.id = params.id;
      
    }); }
id:string;

urlimg:string="http://localhost:8000/storage/";
post:Post=new Post();
  ngOnInit() {
 
  this.getpost();
  
}
getpost()
{
  this.service.getOnePost(this.id).subscribe(data => {
  
    this.post=data; 

    this.post.file=this.urlimg+this.post.file;
    
  });
}
}
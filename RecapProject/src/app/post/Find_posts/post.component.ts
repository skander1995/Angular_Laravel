import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/Models/Post';
import { JsonPipe } from '@angular/common';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
listposts:Post[];
list:string;
imgUrl: string = "http://localhost:8000/storage/";
  constructor(private service:PostService,private router:Router) { }

  ngOnInit() {
    this.getposts();
   
  }
  getposts()
  { 
    this.service.getposts().subscribe(data => {
      this.listposts=data; 
    });
       
  }

  approve(id:number)
  {
    console.log("approving");
    this.service.approveposts(id).subscribe((res)=>{
      console.log(res);
      this.getposts();
  });
  }
  disapprove(id:number)
  {
    console.log("disapproving");
    this.service.disapproveposts(id).subscribe((res)=>{
      console.log(res);
      this.getposts();
  });
  }

  delete(id:number)
  {
    console.log("deleting "+ id);
    this.service.deleteposts(id).subscribe((res)=>{
      console.log(res);
      this.getposts();
  });

    
  }
}

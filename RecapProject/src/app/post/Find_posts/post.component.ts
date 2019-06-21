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
  constructor(private service:PostService,private router:Router) { }

  ngOnInit() {
    this.getposts();
   
  }
  getposts()
  {
    //console.log(this.service.getposts());
    this.service.getposts().subscribe(data => {
      //console.log(data),
      this.listposts=data;

      console.log("list ");
      console.log(this.listposts);
      //this.list=JSON.stringify(this.listposts);
    });
    
  /**
   *  this.service.getposts().pipe(map(data => {this.listposts=data}));
   console.log(this.listposts);
   */

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
    console.log("approving");
    this.service.disapproveposts(id).subscribe((res)=>{
      console.log(res);
      this.getposts();
  });
  }
}

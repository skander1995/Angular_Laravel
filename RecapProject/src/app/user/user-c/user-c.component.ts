import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-c',
  templateUrl: './user-c.component.html',
  styleUrls: ['./user-c.component.css']
})
export class UserCComponent implements OnInit {
  listusrs:User[];
  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    this.getusers();
  }
  getusers()
  {
    //console.log(this.service.getposts());
    this.service.getusers().subscribe(data => {
      //console.log(data),
      this.listusrs=data;

      console.log("list ");
      console.log(this.listusrs);
      //this.list=JSON.stringify(this.listposts);
    });
  }
}

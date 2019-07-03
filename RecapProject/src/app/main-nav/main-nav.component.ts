import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public currentUser: Observable<User>;
  public auth:Boolean =false;
  
  constructor(private service:AuthService,private router:Router) {
    this.currentUser =   JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser)
    {
      this.auth=!this.auth;
    }
  }

  ngOnInit() {  
    //this.currentUser=this.service.currentUser$;
    
    this.service.change.subscribe(user => {
      this.auth=!this.auth;
      console.log("receiving");
      this.currentUser = user;
    });
  }
  
logout(){
  this.currentUser=null;
  this.service.logout();
  this.router.navigate(['login'])
}
}

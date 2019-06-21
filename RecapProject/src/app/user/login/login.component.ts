import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  c_password: any;
  auth_token: any;
  email: any;
  constructor(private service:UserService, private fb: FormBuilder,private router:Router) { }
  CreateForm: FormGroup;
  erreur : string ="";
  ngOnInit() {
    this.CreateForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      })

  }
login() {

    var email = this.CreateForm.controls.email.value;
    var password = this.CreateForm.controls.password.value;
   
    this.service.login(email,password).subscribe(
      result => {
        console.log("result");
        console.log(result);
        this.auth_token = result['access_token'];
        localStorage.setItem("auth_token", this.auth_token);
        this.service.getToken(this.auth_token);
      },
      error => {
        console.error("error login");
      }
  );
    
  }
}

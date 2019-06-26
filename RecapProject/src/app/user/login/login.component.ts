import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { longStackSupport } from 'q';
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
  constructor(private service:UserService, private fb: FormBuilder,private router:Router, private authser:AuthService) { }
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
    
    this.authser.login({email:email,password:password}).subscribe(
      result => {
        console.log("result");
        console.log(result);
        this.router.navigate(['posts']);       
      },
      error => {
        console.error("error login");
      }
  );
  }

  
}

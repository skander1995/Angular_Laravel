import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  CreateForm: FormGroup;
  erreur: string = "";
  fileData: File = null;
  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.CreateForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    password: ['', Validators.required],
    confirmedPassword: ['', Validators.required],
    email: ['', Validators.required],
    file: ['']
                                    },[this.pwdMatchValidator,
                                     // this.validateFile(this.fileData)
                                    ])
  }
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmedPassword').value
       ? null : {'mismatch': true};
 }

 register()
 {const formData = new FormData();
   var $user = new User();
      var name=this.CreateForm.controls.firstname.value;
      var email=this.CreateForm.controls.email.value;
      var password=this.CreateForm.controls.password.value;
      var password_confirmation=this.CreateForm.controls.confirmedPassword.value;
      formData.append('name',name);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('password_confirmation',password_confirmation);
      formData.append('image',this.fileData);

    this.service.register(formData).subscribe(
      data => {
        console.log("regitser Request is successful ", data);
        this.router.navigate(['login']);
      },
      error => {
        this.erreur = error.error;
        console.log("Error", this.erreur);
      }
    );
    }

    fileProgress(event) {

      this.fileData = <File>event.target.files[0];
      console.log(this.fileData);
    }
    validateFile(name: File) {
      
      //var ext = name.substring(name.lastIndexOf('.') + 1);
      if (name.type == 'image/png') {
          return true;
      }
      else {
          return false;
      }
  }
}

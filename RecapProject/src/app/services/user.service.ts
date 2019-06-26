import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private http : HttpClient,private service:AuthService) { }

  

getusers()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer '+this.service.getJwtToken()
    })
  };
  return this.http.get<User[]>('/api/users', httpOptions);
}
getToken(token) {
  this.token = token;
}
sendToken() {
  return this.token;
}

}

import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private http : HttpClient) { }

  login (email:string,password:string): Observable<User>
   {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    var url="/api/login";
    return this.http.post<User>(url,{"email": email,"password":password});
    
}

getusers()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer '+this.token
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

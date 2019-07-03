import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http : HttpClient,private userservice:AuthService) { }

  addCom(form:FormData){
    var url = "/api/comment";
    let headers = new HttpHeaders();
    
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      }),
     
    };
    return this.http.post(url,form,httpOptions);
  }
}

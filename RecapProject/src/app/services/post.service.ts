import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Post } from '../Models/Post';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class PostService {
posts:Post[];
post:Post;
  constructor(private http : HttpClient,private userservice:AuthService) { }
  //--with auth
  getposts():Observable<Post[]>{
    var url="/api/posts" ;
   
    let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      })
    };
    //console.log(this.userservice.getJwtToken());
    return this.http.get<Post[]>(url,httpOptions);
    ;
  }
  getOnePost(id:string):Observable<Post>{
    var url="/api/posts/"+id ;
   
    let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      })
    };
    //console.log(this.userservice.getJwtToken());
    return this.http.get<Post>(url,httpOptions);
  }

  addPost(post:FormData): Observable<Post> {
   // console.log(post.title+"  "+post.body+"  "+post.file)
    var url="/api/posts/store";

    let headers = new HttpHeaders();
    
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      }),
     
    };
    
    return this.http.post<Post>(url,post,httpOptions);
    
}

deleteposts(id:number):Observable<{}>{
  var url="/api/posts/delete/"+id ;
  const httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type':  'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
      'Authorization': 'Bearer '+ this.userservice.getJwtToken()
    }),
   
  };
  console.log(url)
  return this.http.get(url,httpOptions);
}

approveposts(id:number){
  var url="/api/posts/approve/"+id ;
  let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      })
    };
  console.log(url)
  return this.http.get(url,httpOptions);
}

disapproveposts(id:number){
  var url="/api/posts/disapprove/"+id ;
  let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.userservice.getJwtToken()
      })
    };
  console.log(url)
  return this.http.get(url,httpOptions);
}
}


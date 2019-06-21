import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Post } from '../Models/Post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient,private userservice:UserService) { }
  //--with auth
  getposts():Observable<Post[]>{
    var url="/api/posts" ;
    console.log(url)
    let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+ this.userservice.sendToken()
      })
    };
    return this.http.get<Post[]>(url,httpOptions);
    ;
  }

  addPost(title:string,body:string,id:string): Observable<Post> {
    //console.log(post);
    var url="/api/posts/store";
    return this.http.post<Post>(url,{"title": title,"body":body,"id":id});
    //return this.http.post<Post>("http://localhost:8000/api/posts/create", post);
}

deleteposts(id:number):Observable<{}>{
  var url="/api/posts/delete/"+id ;
  console.log(url)
  return this.http.delete(url);
}

approveposts(id:number){
  var url="/api/posts/approve/"+id ;
  console.log(url)
  return this.http.get(url);
}

disapproveposts(id:number){
  var url="/api/posts/disapprove/"+id ;
  console.log(url)
  return this.http.get(url);
}
}


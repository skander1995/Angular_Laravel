
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../Models/articles';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient,private userservice:UserService) { }

  
  getarticle():Observable<Article[]>{
    var url="/api/articles" ;
    console.log(url)
    let headers = new HttpHeaders();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+this.userservice.sendToken()
      })
    };
    return this.http.get<Article[]>(url);    ;
  }

  addArticle(title:string,body:string,id:string): Observable<Article> {
    //console.log(post);
    var url="/api/articles/store";
    return this.http.post<Article>(url,{"title": title,"description":body,"id":id});
    //return this.http.post<Post>("http://localhost:8000/api/posts/create", post);
}

deleteArticle(id:number): Observable<{}> {
  var url="/api/articles/delete/"+id ;
  console.log(url)
  return this.http.delete(url);
}

}


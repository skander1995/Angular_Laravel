import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from '../models/tokens';
import { User } from 'src/app/Models/User';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() change = new EventEmitter();

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;
 
  constructor(private http: HttpClient) {
   
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser$ =   JSON.parse(localStorage.getItem('currentUser'));
  }

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>("/api/login", user)
      .pipe(
        tap(tokens => {
          this.doLoginUser(user.email, tokens)
          this.http.get<User>(`api/user`, {
            headers: new HttpHeaders({
              Authorization: `Bearer ${tokens.access_token}`
            })
          }).subscribe(
            user => {
              const u = user as User;
              console.log(u.name);
              user.token = tokens.access_token;
              localStorage.setItem('currentUser', JSON.stringify(user));
              // console.log('current user form storage : ');
              // console.log(JSON.parse(localStorage.getItem('currentUser')));
              this.currentUserSubject.next(user);
              
              this.toggle();
            },
            err => console.log(JSON.stringify(err))
          );
        }),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));

  }

  logout() {
   
   console.log("Loging out");
   localStorage.removeItem(this.JWT_TOKEN);
   localStorage.removeItem(this.REFRESH_TOKEN);
   localStorage.removeItem('currentUser');
   console.log("deleted from localstorage")
    this.currentUserSubject.next(null);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>('/refresh', {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access_token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    
    console.log(tokens);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
  toggle() {
    console.log("emmiting");
    this.change.emit(this.currentUser$);
  }

  public register(user:FormData) :Observable<User>
  {

    return this.http.post<User>('/api/register',user);
  }
}

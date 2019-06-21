import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/Find_posts/post.component';
import { CreatePostComponent } from './post/Create_posts/create-post.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { UserCComponent } from './user/user-c/user-c.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  
    { path: 'posts', component: PostComponent },
    { path: 'posts/create', component: CreatePostComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/create', component: CreateArticleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserCComponent },
    
    /*
    path: 'posts', component: PostComponent, children: [
      //{ path: 'liste', component: ListAnnoncesComponent },
     // { path: 'estimation', component: EstimationCoutComponent }
    ]*/
  
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CreatePostComponent,
    CreateArticleComponent,
    ArticlesComponent,
    UserCComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

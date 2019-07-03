import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/Find_posts/post.component';
import { CreatePostComponent } from './post/Create_posts/create-post.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { UserCComponent } from './user/user-c/user-c.component';
import { LoginComponent } from './user/login/login.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/services/auth.service';
import { RegisterComponent } from './user/register/register.component';
import { ShowComponent } from './post/show/show.component';
import { CommentaireComponent } from './commentaire/commentaire.component';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CreatePostComponent,
    CreateArticleComponent,
    ArticlesComponent,
    UserCComponent,
    LoginComponent,
    MainNavComponent,
    RegisterComponent,
    ShowComponent,
    CommentaireComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

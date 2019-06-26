import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { PostComponent } from './post/Find_posts/post.component';
import { CreatePostComponent } from './post/Create_posts/create-post.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { UserCComponent } from './user/user-c/user-c.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  
  { path: 'posts', component: PostComponent,canActivate: [AuthGuard] },
  { path: 'posts/create', component: CreatePostComponent ,canActivate: [AuthGuard]},
  { path: 'articles', component: ArticlesComponent ,canActivate: [AuthGuard]},
  { path: 'articles/create', component: CreateArticleComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserCComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

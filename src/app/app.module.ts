import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserComponent} from './user/user.component';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from './posts/posts.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { PostComponent } from './posts/post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

let routes: Routes;
routes = [
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },

  {path: 'posts', component: PostsComponent},

  {path: 'posts/:id', component: PostDetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

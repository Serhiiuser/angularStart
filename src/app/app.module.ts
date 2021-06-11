import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './componenet/app/app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './componenet/home/home.component';



let routes: Routes =[

  {path: 'home',component:HomeComponent},
  {path: 'users', loadChildren:() => import('./modules/user/user.module').then(m =>m.UserModule)},
  {path: 'posts', loadChildren:() => import('./post-modules/posts/post.module').then(m =>m.PostModule)},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


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

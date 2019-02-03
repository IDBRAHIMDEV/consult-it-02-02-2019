import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import { FormsModule } from '@angular/forms';
import { VotesComponent } from './votes/votes.component';
import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: "", redirectTo: '/posts', pathMatch:'full'},
  {path: "courses", component: CoursesComponent},
  {path: "posts", component: PostsComponent},
  {path: "**", component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    VotesComponent,
    PostsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

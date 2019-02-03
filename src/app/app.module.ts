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

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

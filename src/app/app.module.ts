import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

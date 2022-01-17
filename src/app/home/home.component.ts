import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
GithubService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public myService: GithubService) { }

public name =''
public repos =''
public avatar =''
public followers =''
public followings =''
public githubLink =''
public reposUrl =''

  ngOnInit(): void {
   this.getMyDataUser()
  }
  getMyDataUser(){
   return this.myService.getMyUser().subscribe(data =>{
    this.name = data.name;
    this.avatar = data.avatar_url;
    this.followers =data.followers
    this.followings =data.following;
    this.repos = data.public_repos;
    this.reposUrl = data.repos_url;
    this.githubLink=data.html_url;

   })

  }

}

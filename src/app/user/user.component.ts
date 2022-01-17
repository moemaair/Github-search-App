import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myService: GithubService) {
   }
   ngOnInit() {
    this.formSubmit();
   }
   
   public username = ''
   public name =''
   public repos =''
   public avatar =''
   public followers =''
   public followings =''
   public githubLink =''
   public reposUrl =''
   public bio =''

   formSubmit(){
    return this.myService.getUser(this.username)
    .subscribe(res =>{
     console.log(res)
     this.name = res.name;
     this.avatar = res.avatar_url;
     this.followers =res.followers
     this.followings =res.following;
     this.repos = res.public_repos;
     this.reposUrl = res.repos_url;
     this.githubLink=res.html_url;
     this.bio = res.bio;

    })
   }



  


 


  
}

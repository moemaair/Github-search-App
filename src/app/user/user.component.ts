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

  ngOnInit(): any {
   //promise object: requesting by HTTP   
   return this.myService.getData()
  }

 
}


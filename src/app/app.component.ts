import { Component, ElementRef, ViewChild} from '@angular/core';
import { GithubService } from './github.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search-app';
  value ='';

  public arr:string[]=[];

   constructor(public myService:GithubService ){
    this.formSubmit()
    console.log(this.value)
   }
    
    formSubmit(){
   
    }

 

 
     




 }

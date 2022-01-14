import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {
   this.getData()
   
  }
  getData(){
   let promise =  this.http.get<any>(`${environment.apiToken}`)
   .toPromise();
   promise.then(res=>{
    console.log(res)
   })
   promise.catch(erro =>{
    console.log('error')
   })


   return promise;
  }
  
 

  
}

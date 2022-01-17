import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class GithubService {
 
 clientid='Iv1.38de8f27df3d6579'
 clientsecret='5cd1470d498837d8eeb0f5b212a2226bb15e0ac4'
 

constructor(private http: HttpClient) {
}
getUser(username:string) {
  return this.http.get<any>('https://api.github.com/users/'+ username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
}
getMyUser(){
 return this.http.get<any>('https://api.github.com/users/moemaair')
}





 

 
 

  

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



 private posturl:string;
    constructor(private http:HttpClient) {
    
    this.posturl='http://localhost:9092/postuserdata';
   }

    
   saveuser(user:User){
    console.log(user.username+"-"+user.emailid+"-"+user.phnumber+"-"+user.password);
    return this.http.post<User>(this.posturl,user)
   }
}

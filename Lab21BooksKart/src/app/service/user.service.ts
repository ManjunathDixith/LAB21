import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  
   }
   registerUser(userdetails : any) {
    return this.http.post("https://bookcart.azurewebsites.net/api/user/" , userdetails);
  }
  validateUserName(userName: string) {
    return this.http.get("https://bookcart.azurewebsites.net/api/user/" + "validateUserName/" + userName);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private router: Router) { }

  authenticate(user:User) {
    if (user.isLogged) {
      sessionStorage.setItem('username', user.username)
      sessionStorage.setItem('userId',`${user.userId}`);
      return true;
    } else {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userId');
      return false;
    }
  }

  loadUser(username: string, password:string):Observable<User>{
    return this.http.post<any>('http://localhost:9000/users/'+username+'+'+password,{},{'headers':{'content-type':'application/json'}});

  }

  saveUserInfo(user:User):Observable<User>{
    return this.http.put<User>('http://localhost:9000/users/'+user.userId,user)
  }

  getUserById(id:number):Observable<User>{
    let user: User = new User;
    return this.http.get<User>('http://localhost:9000/users/'+id)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    this.router.navigate(['login']);
  }
}
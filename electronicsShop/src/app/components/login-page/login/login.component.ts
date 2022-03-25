import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/user';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  dataStream: any[]=[];
  invalidLogin:boolean=false;

  constructor(private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    this.auth.loadUser(this.user.username,this.user.password).subscribe(data=>{
      if(data!==null){
        this.user.address = data.address
        this.user.email = data.email
        this.user.userId = data.userId
        this.user.password = data.password
        this.user.name = data.name
        this.user.username = data.username
        this.user.isLogged = true;
        this.router.navigate(['/home']);
        console.log(this.user);
        this.invalidLogin = false;
        this.auth.authenticate(this.user);    
      }
      else{
        this.user.isLogged = false;
        this.router.navigate(['']);
        this.invalidLogin = true;
        console.log(this.user);
      }

        
    })
    
  }
  isUserLogged():boolean{
    return this.auth.isUserLoggedIn();
  }  


}

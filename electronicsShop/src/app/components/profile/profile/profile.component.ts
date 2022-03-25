import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User;
  id: number = 0;
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('userId'));
   this.auth.getUserById(this.id).subscribe(data=>{
     this.user = data;
     console.log(this.user);
   }) 
  }

  saveInfo(){
    this.auth.saveUserInfo(this.user).subscribe(data=>{
      console.log(data);
    });
  }


}

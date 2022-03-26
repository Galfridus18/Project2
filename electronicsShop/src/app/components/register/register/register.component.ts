import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User = new User;
  addressText1:string = ''
  addressText2:string = ''
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {    
  }

  formSubmit(){
    this.user.address = `${this.addressText1} ${this.addressText2}`;
    console.log(this.user.address);
    this.auth.addUser(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/login'])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../services/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = ""
  password: string = ""
  errorMessage= "invalid credentials"
  invalidLogin = false
  constructor(private router: Router, public hac : HardcodedAuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.hac.authenticate(this.username, this.password)){
      this.invalidLogin =false;
      this.router.navigate(['welcome/archie'])
    }
    
    else
    this.invalidLogin = true;
  }


}

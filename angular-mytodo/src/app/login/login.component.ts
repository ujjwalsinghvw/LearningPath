import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../services/hardcoded-authentication-service.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

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
  constructor(private router: Router, 
              public hac : HardcodedAuthenticationServiceService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // hardcoded Login

  // handleLogin(){
  //   // console.log(this.username)
  //   if(this.hac.authenticate(this.username, this.password)){
  //     this.invalidLogin =false;
  //     this.router.navigate(['welcome/archie'])
  //   }
    
  //   else
  //   this.invalidLogin = true;
  // }

  handleBasicAuthLogin() {
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }


}

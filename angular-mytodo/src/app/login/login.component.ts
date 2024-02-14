import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Archie"
  password = ""
  errorMessage= "invalid credentials"
  invalidLogin = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.username === "Archie" && this.password==="abc123"){
      this.invalidLogin =false;
      this.router.navigate(['welcome/archie'])
    }
    
    else
    this.invalidLogin = true;
  }


}

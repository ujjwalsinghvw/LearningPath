import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  
  constructor() { }

  authenticate (username:string, password:string) {
    // console.log(true)
    
    if(username === "Archie" && password==="abc123"){
      sessionStorage.setItem("user", username);
      return true;
      
    }
    return false;
      
  }

  isUserLoggedIn(){
    return sessionStorage.getItem("user")!=null
  }

  logout(){
    sessionStorage.removeItem("user")
  }
}

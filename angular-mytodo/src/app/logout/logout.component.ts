import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../services/hardcoded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hac: HardcodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.hac.logout()
  }

}

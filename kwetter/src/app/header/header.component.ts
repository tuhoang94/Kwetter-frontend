import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
  }

  ngOnInit() {
    console.log("oninit header");
  }
  ngOnChange(){
    console.log("onchange header");

  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SearchuserComponent } from '../searchuser/searchuser.component';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
  }

  ngOnInit() {

  }

  ngOnChange(){
    console.log("onchange header");
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }


  }



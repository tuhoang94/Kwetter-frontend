import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loading = false;
  error = '';


  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username == null || this.password == null) {
      console.log("empty");
      this.error = "Fill in username and password";
    } else {
      this.loading = true;
      this.authenticationService.login(this.username, this.password)
        .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        error => {
          console.log("error");

          console.log(error);
          this.error = "Username or password is incorrect."
          this.loading = false;
        });
    }

  }


}

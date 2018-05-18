import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  loading = false;
  error = '';
  user:User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['login']);
    //console.log(this.user);
    /*let user: User;



    if (this.username == null || this.password == null) {
      console.log("empty");
      this.error = "Fill in username and password";
    } else {
      user.username = this.username;
      user.password = this.password;
      this.loading = true;
      this.userService.createUser(user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['login']);
        },
        error => {
          console.log("error");

          console.log(error);
          this.error = error;
          this.loading = false;
        });
    }*/



  }

}

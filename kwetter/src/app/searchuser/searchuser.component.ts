import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { AuthenticationService } from '../api/authentication.service';
import { User } from '../models/user';


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  loggedinUser: User;
  users: any[];
  followingUsers: any[];
  search:any;


  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
    this.loggedinUser = authenticationService.getLoggedinUser();
  }

  ngOnInit() {
    this.getUsers();
    this.getFollowing();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log("users");
          console.log(data);
        },
        error => {
          console.log("error");
          console.log(error);
        });
  }

  getFollowing() {
    this.userService.getFollowing(this.loggedinUser.id)
      .subscribe(
        data => {
          this.followingUsers = data;
          console.log("followers");
          console.log(data);
        },
        error => {
          console.log("error");
          console.log(error);
        });
  }

  followUser(usernameFollow: string) {
    console.log(usernameFollow);
    this.getFollowing();
    this.userService.followUser(this.loggedinUser.username, usernameFollow).subscribe(
      data => {
        console.log("followed user: " + usernameFollow);
      },
      error => {
        console.log("error");
        console.log(error);
      });
  }

  unfollowUser(userUnfollow: string) {
    console.log("unfollow user: " + userUnfollow);
    this.getFollowing();
    this.userService.unfollowUser(this.loggedinUser.username, userUnfollow).subscribe(
      data => {
        console.log("unfollowed user: " + userUnfollow);
      },
      error => {
        console.log("error");
        console.log(error);
      });
  }

  isFollowing(userid): boolean {

    for (var user of this.followingUsers) {
      if(userid == user.id){
        console.log("Is following: " + userid);
        return true;
      }
      else{
        console.log("Is NOT following: " + userid);
        return false;
      }
    }

  }

}

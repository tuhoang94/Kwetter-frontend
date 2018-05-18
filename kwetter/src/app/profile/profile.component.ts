import { Component, OnInit } from '@angular/core';
import { Kweet } from '../models/kweet';
import { KweetService } from '../api/kweet.service';
import { User } from '../models/user';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  followingBool: boolean;
  followersBool: boolean;
  kweetBool: boolean;

  loggedinUser: User;
  ownKweets: Kweet[];
  followingUsers: any[];
  followersUsers: any[];


  constructor(private kweetService: KweetService, private userService: UserService) {
    this.kweetBool = true;
    var retrievedObject = localStorage.getItem('loggedinUser');

    this.loggedinUser = JSON.parse(retrievedObject);
    console.log(this.loggedinUser);
  }

  ngOnInit() {
    this.getFollowers();
    this.getFollowing();
  }

  /*
    Switching tabs dirty
  */
  followingClick() {
    this.followingBool = true;
    this.followersBool = false;
    this.kweetBool = false;
  }
  followersClick() {
    this.followingBool = false;
    this.followersBool = true;
    this.kweetBool = false;
  }
  kweetClick() {
    this.followingBool = false;
    this.followersBool = false;
    this.kweetBool = true;
  }

  getOwnKweets() {
    this.kweetService.getKweetsFromUser(this.loggedinUser.id)
      .subscribe(
      kweets => this.ownKweets = kweets,
      error => console.log("Error: " + error)
      );
  }

  // return following users
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

  //return followers users
  getFollowers() {
    this.userService.getFollowers(this.loggedinUser.id)
    .subscribe(
    data => {
      this.followersUsers = data;
      console.log("followers");
      console.log(data);
    },
    error => {
      console.log("error");
      console.log(error);
    });
  }

  //return user 
  getUserPage() {

  }

}

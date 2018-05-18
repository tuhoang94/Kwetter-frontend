import { Component, OnInit } from '@angular/core';
import { Kweet } from '../models/kweet';
import { KweetService } from '../api/kweet.service';
import { User } from '../models/user';


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
  followingUsers: User[];
  followersUsers: User[];


  constructor(private kweetService: KweetService) {
    this.kweetBool = true;
    var retrievedObject = localStorage.getItem('loggedinUser');

    this.loggedinUser = JSON.parse(retrievedObject);
    console.log(this.loggedinUser);
  }

  ngOnInit() {
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
    

  }

  //return followers users
  getFollowers() {

  }

  //return user 
  getUserPage() {

  }

}

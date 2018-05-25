import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { User } from '../models/user';
import { KweetService } from '../api/kweet.service';
import { Kweet } from '../models/kweet';

@Component({
  selector: 'app-otheruserprofile',
  templateUrl: './otheruserprofile.component.html',
  styleUrls: ['./otheruserprofile.component.css']
})
export class OtheruserprofileComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  user: User;
  followingBool: boolean;
  followersBool: boolean;
  kweetBool: boolean = true;

  ownKweets: Kweet[];
  followingUsers: any[];
  followersUsers: any[];


  constructor(private route: ActivatedRoute, private userService: UserService, private kweetService: KweetService, private router:Router) { 

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.getUser(this.id);
    this.getFollowers(this.id);
    this.getFollowing(this.id);
  }

  getUser(id: number) {
    this.userService.getUserById(id)
    .subscribe(
    data => {
      this.user = data;
      console.log("user");
      console.log(data);
    },
    error => {
      console.log("error");
      console.log(error);
    });
  }

  getOwnKweets(id: number) {
    this.kweetService.getKweetsFromUser(id)
      .subscribe(
      kweets => this.ownKweets = kweets,
      error => console.log("Error: " + error)
      );
  }

  // return following users
  getFollowing(id: number) {
    this.userService.getFollowing(id)
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
  getFollowers(id: number) {
    this.userService.getFollowers(id)
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goOtherUser(id) {
    this.getUser(id);
    this.getFollowers(id);
    this.getFollowing(id);
  }
}

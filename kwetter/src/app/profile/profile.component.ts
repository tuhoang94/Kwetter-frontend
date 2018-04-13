import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  followingBool: boolean;
  followersBool: boolean;
  kweetBool: boolean;
  constructor() { 
    this.kweetBool=true;
  }

  ngOnInit() {
  }

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
  kweetClick(){
    this.followingBool = false;
    this.followersBool = false;
    this.kweetBool = true;
  }

}

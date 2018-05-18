import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Kweet } from '../models/kweet';
import { Observable } from 'rxjs/Observable';
import { KweetService } from '../api/kweet.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kweetsFollowing: any[];

  kweets: any[];

  message: string;

  search:any;

  user:User;
  constructor(private kweetService: KweetService, private userService: UserService) {
    var retrievedObject = localStorage.getItem('loggedinUser');
    
    userService.getUserById(JSON.parse(retrievedObject)["id"]).subscribe(data=>{this.user = data;});
  }

  ngOnInit() {
    this.getKweets();

  }

  //get kweets from following
  getKweetsFollowing(id: number) {
    this.kweetService.getKweetFromsFollowing(id)
      .subscribe(
      data => {
        this.kweetsFollowing = data;
        console.log("getKweets()");

        console.log(data);
      },
      error => {
        console.log("error");

        console.log(error);

      });
  }

  getKweets() {
    this.kweetService.getKweets()
      .subscribe(
      data => {
        this.kweets = data;
        console.log("component getKweets()");

        console.log(data);
      },
      error => {
        console.log("error");

        console.log(error);

      });
  }

  addKweet() {
    let userid = this.user.id;
    this.kweetService.addKweet(this.message, userid).subscribe(
      data => {
        let kweet =
          {
            "id": this.user.id,
            "message": this.message,
            "username": this.user.username
          }

          ;
        this.kweets.push(kweet);
      },
      error => {
        console.log("error");

        console.log(error);

      });
  }



}

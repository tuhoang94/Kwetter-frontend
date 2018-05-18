import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Kweet } from '../models/kweet';
import { Observable } from 'rxjs/Observable';
import { KweetService } from '../api/kweet.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedinUser: User;

  kweetsFollowing: any[];

  kweets: any[];

  message: string;

  search:any;

  constructor(private kweetService: KweetService) {
    var retrievedObject = localStorage.getItem('loggedinUser');

    this.loggedinUser = JSON.parse(retrievedObject);
    console.log(this.loggedinUser);
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
    let userid = this.loggedinUser.id;
    this.kweetService.addKweet(this.message, userid).subscribe(
      data => {
        let kweet =
          {
            "id": this.loggedinUser.id,
            "message": this.message,
            "username": this.loggedinUser.username
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

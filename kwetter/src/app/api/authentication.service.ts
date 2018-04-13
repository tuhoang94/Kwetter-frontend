import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable()
export class AuthenticationService {
    loggedinUser: any;

    apiUrl = environment.userApiUrl;

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };


    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let url: any;
        url = this.apiUrl + 'login';
        console.log("url:" + url);
        return this.http.post("http://localhost:8080/kwetter/rest/user/login", { username: username, password: password }, this.httpOptions)
            .map(user => {
                // login successful if there's a jwt token in the response
                console.log("connection works");
                if (user != null) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    console.log("creating localstorage");

                    localStorage.setItem('loggedinUser', JSON.stringify(user));
                }

                return user;
            });
    }

    getLoggedinUser(){
        this.loggedinUser = localStorage.getItem('loggedinUser');
        return this.loggedinUser;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
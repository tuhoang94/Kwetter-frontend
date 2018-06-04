import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

@Injectable()
export class UserService {

  apiUrl = environment.userApiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  httpPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  constructor(private http: HttpClient) { }


  getUsers(): Observable<any[]> {
    return this.http.get(this.apiUrl + "get", this.httpOptions)
      .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "get/" + id, this.httpOptions)
      .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get("")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFollowers(userId: number): Observable<any[]> {
    return this.http.get(this.apiUrl + "followers/" + userId, this.httpOptions)
      .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
  }
  getFollowing(userId: number): Observable<any[]> {
    return this.http.get(this.apiUrl + "following/" + userId, this.httpOptions)
      .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions)
      .map(response => console.log(response))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  followUser(usernameLoggedin: string, userFollowing: string) {
    /* return this.http.post(this.apiUrl, "follow", this.httpOptions)
       .map(response => console.log(response))
       .catch((e: any) => Observable.throw(this.errorHandler(e)));*/
    let body = new URLSearchParams();
    body.set('username', usernameLoggedin);
    body.set('otherUsername', userFollowing);

    return this.http.post(this.apiUrl + 'follow', body.toString(), this.httpPost).map(data => {
      console.log("Followed user:" + userFollowing);
    }).catch((error: any) => this.handleError(error));
  }

  unfollowUser(usernameLoggedin: string, userUnfollowing) {

      let body = new URLSearchParams();
      body.set('username', usernameLoggedin);
      body.set('otherUsername', userUnfollowing);
  
      return this.http.post(this.apiUrl + 'unfollow', body.toString(), this.httpPost).map(data => {
        console.log("UnFollowed user:" + userUnfollowing);
      }).catch((error: any) => this.handleError(error));
  }

  updateUser(user: User) {
    return this.http.put(this.apiUrl + user.id, user);

  }

  deleteUser(userId: number) {
    return this.http.delete(this.apiUrl + userId);

  }

  errorHandler(error: any): void {
    console.log(error)
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

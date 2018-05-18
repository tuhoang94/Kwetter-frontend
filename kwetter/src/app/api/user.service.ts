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
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*'
    })
  };

  httpPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  constructor(private http: HttpClient) { }


  getUsers() : Observable<User[]>{
    return this.http.get("http://localhost:8080/kwetter/rest/user/get")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserById(id: number) : Observable<User>{
    return this.http.get("")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get("")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFollowers() : Observable<User[]>{
    return this.http.get("")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getFollowing() : Observable<User[]>{
    return this.http.get("")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions)
      .map(response => console.log(response))
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  followUser(usernameLoggedin:string, userFollowing){
    return this.http.post(this.apiUrl, "", this.httpOptions)
    .map(response => console.log(response))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  unfollowUser(usernameLoggedin:string, userUnfollowing){
    return this.http.post(this.apiUrl, "", this.httpOptions)
    .map(response => console.log(response))
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
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

}

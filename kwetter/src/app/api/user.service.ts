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
      'Access-Control-Allow-Origin': '*'
    })
  };


  constructor(private http: HttpClient) { }

  public extractData(res: Response) {
    const body = res.json();
    return body;
  }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: number) {
    return this.http.get(this.apiUrl + id);

  }

  getUserByUsername(username: string) {
    return this.http.get(this.apiUrl + username);

  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions)
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

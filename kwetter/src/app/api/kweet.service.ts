import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { environment } from '../../environments/environment';
import { Kweet } from '../models/kweet';





@Injectable()
export class KweetService {

  kweetApiUrl = environment.kweetApiUrl;
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

  getKweets() : Observable<any[]> {
    console.log("kweetservuce getkweets")
    return this.http.get(this.kweetApiUrl + "get", this.httpOptions)
    .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
    /*return this.http.get("http://localhost:8080/kwetter/rest/kweet/get", this.httpOptions).map(data => {

      console.log("service get kweet work");
      console.log(data);

    }).catch((error: any) => this.handleError(error));*/
  }

  getKweetById(id: number): Observable<Kweet> {
    return this.http.get(this.kweetApiUrl + "get/" + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getKweetsFromUser(id: number): Observable<any[]> {
    return this.http.get(this.kweetApiUrl + "get/userkweet/" + id, this.httpOptions)
    .map((res: Response) => res)
      .catch((error: any) => this.handleError(error));
  }

  getKweetFromsFollowing(id: number): Observable<Kweet[]> {
    return this.http.get(this.kweetApiUrl + "kweetsfollowing" + id, this.httpOptions)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      

  }

  addKweet(message: string, userId: number): Observable<any> {
    let body = new URLSearchParams();
    body.set('userid', userId.toString());
    body.set('message', message);
    console.log('addKweet body:');
    console.log(body.toString());
    return this.http.post(this.kweetApiUrl + 'create', body.toString(), this.httpPost).map(data => {

      console.log("posted kweet");

    }).catch((error: any) => this.handleError(error));


  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

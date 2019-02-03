import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//let apiUrl = "http://localhost:8100/developer_token";
let apiUrl = "http://localhost:8100/token";

@Injectable()
export class AuthServiceProvider {
  public loginToken : string;
  constructor(public http: Http) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        let data = "username=" + credentials.username +
         "&password=" + encodeURIComponent(credentials.password) +
         "&grant_type=password&client_id=tjommisdemo2018_signing_key_that_should_be_very_long";
        this.http.post(apiUrl,data,{headers: headers})
          .subscribe(res => {
            if (res.status == 200) {
              console.log(res);
              this.loginToken = res.json().access_token;
              return resolve(this.loginToken);
            }
            else {
              reject(res.statusText);
            }
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
//        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-');
8

        this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }
}

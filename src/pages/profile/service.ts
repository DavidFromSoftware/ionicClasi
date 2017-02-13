import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

export class User {
  name: string = "" ;
  email: string = "" ;
  avatar: string = "" ;
 
  constructor(name: string, email: string, avatar: string) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }
}

@Injectable()
export class SessionService{

  rootUrl:string = "http://api.lvh.me:3000/v1/"
  access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"

  endpoint_url:string = this.rootUrl+"sesion?access_token="+this.access_token;
	constructor(private http: Http){
       this.http = http;
   }

  newSesion(params){
    let headers = new Headers({ 'Content-Type': 'application/json' });
      return this.http.post(this.endpoint_url, params, headers).map(response => response.json());
   }

	public getUserInfo(): User {
    if(typeof sessionStorage["currentUser"] != "undefined") {
      return JSON.parse(sessionStorage["currentUser"]);
    }else{
      return undefined
    }
  } 

  public setUserInfo(user) {
    sessionStorage["currentUser"] = JSON.stringify(user)
  }


}
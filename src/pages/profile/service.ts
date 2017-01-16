import { Injectable }     from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class SessionService{
	access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"
	endpoint_url:string = "http://api.lvh.me:3000/v1/sesion?access_token=6e7764964e6cab6eaa8bf3a984e5b888";
	currentUser: User;
	constructor(private http: Http){
       this.http = http;
   }

   	newSesion(params){
   		let headers = new Headers({ 'Content-Type': 'application/json' });
    	return this.http.post(this.endpoint_url, params, headers).map(response => response.json());
   	}

	public getUserInfo(): User {
    	return this.currentUser;
  	} 

  	public setUserInfo(email, fullname) {
   		this.currentUser = new User(email, fullname);
  	}


}
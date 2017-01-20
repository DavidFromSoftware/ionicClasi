import { Injectable }     from '@angular/core';
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
	//access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"
  //uri:string = "http://api.lvh.me:3000/v1/sesion?access_token="
  //endpoint_url:string = uri+access_token;
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

  public setUserInfo(user) {
   	this.currentUser = new User(user.email, user.fullname, "http://guiachivilcoy.com"+user.img_profile.url);
  }


}
import { Component } from '@angular/core';
import { SessionService } from './service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

	username:string;
	password:string;

	constructor(public navCtrl: NavController, private sessionService: SessionService) {
  	
	}

	public login(){
		if (this.username != null && this.password != null){
			console.log("Try login")
			var params = { "username": this.username, "password": this.password }
			this.sessionService.newSesion(params)
		}else{
			console.log("Complete los campos")
		}
	}

}

import { Component } from '@angular/core';
import { SessionService, User } from './service';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PublicationsPage } from '../publications/publications'

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

	username:string;
	password:string;

	constructor(public navCtrl: NavController, private sessionService: SessionService, public toastCtrl: ToastController) {
  	
	}

	public login(){
		if (this.username != null && this.password != null){
			var params = { "email": this.username, "password": this.password }
			this.sessionService.newSesion(params).subscribe( response => {
				if(response.status == "Successful"){
					this.sessionService.setUserInfo(response.data.email, response.data.fullname)
        			this.navCtrl.setRoot(PublicationsPage)
				}else{
					let toast = this.toastCtrl.create({
				      message: response.response,
				      duration: 2000,
				      position: 'top'
				    });
    				toast.present(toast);
				}
			})
		}else{
			
		}
	}

}

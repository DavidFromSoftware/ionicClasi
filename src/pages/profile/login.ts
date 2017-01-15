import { Component } from '@angular/core';
import { SessionService } from './service';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
					localStorage['current_user'] = JSON.stringify(response.data)
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

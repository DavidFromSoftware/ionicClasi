import { Component } from '@angular/core';
import { SessionService, User } from './service';

import { NavController, ViewController, LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PublicationsPage } from '../publications/publications'

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

	username:string;
	password:string;
  	loading: Loading;

	currentUser= new User("", "", "");

	constructor(public navCtrl: NavController, 
				private sessionService: SessionService, 
				public toastCtrl: ToastController, 
				public viewCtrl: ViewController,
				private loadingCtrl: LoadingController) {}

	ngOnInit(){}

	ionViewWillEnter() {
		if( typeof this.sessionService.getUserInfo() != "undefined" ) {
			this.currentUser.email = this.sessionService.getUserInfo().name
			this.currentUser.name = this.sessionService.getUserInfo().email
			this.currentUser.avatar = this.sessionService.getUserInfo().avatar
		}
	}

	public login(){
		if (typeof this.username != "undefined" && typeof this.password != "undefined"){
			this.showLoading()
			var params = { "email": this.username, "password": this.password }
			this.sessionService.newSesion(params).subscribe( response => {
				if(response.status == "Successful"){
					this.sessionService.setUserInfo(response.data)
					this.loading.dismiss()
        			this.navCtrl.parent.select(0);
				}else{
					this.loading.dismiss()
					let toast = this.toastCtrl.create({
				      message: response.response,
				      duration: 2000,
				      position: 'top'
				    });
    				toast.present(toast);
				}
			})
		}else{
			let toast = this.toastCtrl.create({
				message: "Complete todos los campos",
				duration: 2000,
				position: 'top'
			});
    		toast.present(toast);
		}
	}

	showLoading() {
		this.loading = this.loadingCtrl.create({
	      content: 'Por favor espere...'
	    });
	    this.loading.present();
	}

}

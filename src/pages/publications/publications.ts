import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicationService } from './service';
import { SessionService, User } from '../profile/service';

@Component({
	templateUrl: 'publications.html'
})
export class PublicationsPage {	
	publicationOptions: string = "selling";
	publications= [];

	username: string = '';
	email: string = '';
	currentUser= this.sessionService.getUserInfo()
	constructor(public navCtrl: NavController, private publicationService: PublicationService, private sessionService: SessionService ){

	}
	ngOnInit(){
		this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
	}

	ionViewDidLoad() {}

	ionViewWillEnter() {
		if( typeof this.sessionService.getUserInfo() != "undefined" ) {
			this.username = this.sessionService.getUserInfo().name
			this.email = this.sessionService.getUserInfo().email
		}
	}
	
	ionViewWillLeave() {}


}
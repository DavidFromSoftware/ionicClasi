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
	constructor(public navCtrl: NavController, private publicationService: PublicationService, private sessionService: SessionService ){

	}
	ngOnInit(){
		this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
		let currentUser= this.sessionService.getUserInfo()

	    typeof currentUser != "undefined" ? this.username = currentUser.name : this.username = ""
	    typeof currentUser != "undefined" ? this.email = currentUser.email : this.email = ""
	}


}
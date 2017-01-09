import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicationService } from './service';

@Component({
	templateUrl: 'publications.html'
})
export class PublicationsPage {	
	publicationOptions: string = "selling";
	constructor(public navCtrl: NavController, private publicationService: PublicationService ){}
	ngOnInit(){
		console.log(this.publicationService.getPublications())
	}


}
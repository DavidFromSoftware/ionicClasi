import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicationService } from './service';

@Component({
	templateUrl: 'publications.html'
})
export class PublicationsPage {	
	publicationOptions: string = "selling";
	publications= [];
	constructor(public navCtrl: NavController, private publicationService: PublicationService ){}
	ngOnInit(){
		this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
		console.log(this.publications)
	}


}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPublications} from 'header'

@Component({
	templateUrl: 'publications.html'
})
export class PublicationsPage {	
	publicationOptions: string = "selling";
	constructor(public navCtrl: NavController){

	}
}
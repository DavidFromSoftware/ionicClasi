import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderPublications} from 'header'

@Component({
	templateUrl: 'sell.html'
})
export class Sellpage {
	
	publicationOptions: string = "selling";
	constructor(public navCtrl: NavController){

	}
}
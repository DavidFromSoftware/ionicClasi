import {Component} from '@angular/core'

@Component({
  selector: 'header-publications',
  template: `  
	  <ion-toolbar no-border-top>
	    <ion-segment [(ngModel)]="publicationOptions">
	      <ion-segment-button value="selling">
	        Vender
	      </ion-segment-button>
	      <ion-segment-button value="publicaciones_ventas">
	        Publicaciones en Venta
	      </ion-segment-button>
	    </ion-segment>
	  </ion-toolbar>
  `,
})
export class HeaderPublications {

	publicationOptions: string = "selling";
}
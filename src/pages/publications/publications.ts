import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { PublicationService } from './service';
import { SessionService } from '../profile/service';

@Component({
	templateUrl: 'publication_details.html'
})
export class PublicationDetails {
	publication

	constructor(params: NavParams){
		this.publication = params.data.publication
	}
	ngOnInit(){
		console.log(this.publication)
	}
}


@Component({
	templateUrl: 'publications.html'
})
export class PublicationsPage {	
	publicationOptions: string = "publicaciones_ventas";
	publications= [];
	newSearch:string = ""
	username: string = '';
	email: string = '';
	newProduct= {
		place_name: "",
		price: "",
		place_descripcion: "",
		categorie_id: 19,
		approved: true
	} ;
  	loading: Loading;

	currentUser= this.sessionService.getUserInfo()
	constructor(public navCtrl: NavController, private publicationService: PublicationService, private sessionService: SessionService, private loadingCtrl: LoadingController ){

	}
	ngOnInit(){
		this.showLoading()
		this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
		this.loading.dismiss()
	}

	ionViewDidLoad() {}

	ionViewWillEnter() {
		if( typeof this.sessionService.getUserInfo() != "undefined" ) {
			this.username = this.sessionService.getUserInfo()["fullname"]
			this.email = this.sessionService.getUserInfo()["email"]
		}
	}
	
	ionViewWillLeave() {}

	goLogin(){
		this.navCtrl.parent.select(2);
	}

	openPublicationDetailPage(publication) {
		this.navCtrl.push(PublicationDetails, { publication: publication})
	}

	searchClassifieds(){
		this.publications = []
		if(this.newSearch == ""){
			this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
		}else{
			this.publicationService.getSearchPublications(this.newSearch).subscribe( publications => { this.publications.push(publications)  })
		}
	}

	createNewPublication(NewPublicationObject){
		this.publicationService.PostPublication(NewPublicationObject).subscribe( response => {
			if(response.status == 200){
				this.publications = []
				this.showLoading()
				this.publicationService.getPublications().subscribe( publications => { this.publications.push(publications)  })
				this.loading.dismiss()
			}else{
				console.log("error putos")
				console.log(response)
			}
		})
	}

	showLoading() {
		this.loading = this.loadingCtrl.create({
	      content: 'Por favor espere...'
	    });
	    this.loading.present();
	}


}
import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PublicationService{
  search:string = ""
  rootUrl:string = "http://api.lvh.me:3000/v1/"
  access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"

  getAllPublications:string = this.rootUrl+"lugares/categoria/19?access_token="+this.access_token;
	getSearchPublicationsClas:string = this.rootUrl+"lugares/search/"+this.search+"?access_token="+this.access_token+"&categorie=clasificados"
  newPublication:string = this.rootUrl+"lugares?access_token="+this.access_token

	constructor(private http: Http){
       this.http = http;
   }

   getPublications(){
   		return this.http.get(this.getAllPublications).map(response => response.json().responseData);
   }

   getSearchPublications(newSearch){
   		this.search = newSearch;
   		this.getSearchPublicationsClas = this.rootUrl+"lugares/search/"+this.search+"?access_token="+this.access_token+"&categorie=clasificados"
   		return this.http.get(this.getSearchPublicationsClas).map(response => response.json().responseData);
   }

   PostPublication(newPublication){
     console.log(newPublication);
   }


}
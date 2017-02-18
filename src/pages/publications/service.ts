import { Injectable }     from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SessionService } from '../profile/service';
import 'rxjs/Rx';

@Injectable()
export class PublicationService{
  search:string = ""
  rootUrl:string = "http://api.lvh.me:3000/v1/"
  access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"

  getAllPublications:string = this.rootUrl+"lugares/categoria/19?access_token="+this.access_token;
	getSearchPublicationsClas:string = this.rootUrl+"lugares/search/"+this.search+"?access_token="+this.access_token+"&categorie=clasificados"
  newPublicationUrl:string = this.rootUrl+"lugares?access_token="+this.access_token
  specificPublicationUrl(id){ 
    return this.rootUrl+"lugares/"+id+"?access_token="+this.access_token
   }

	constructor(private http: Http, private sessionService: SessionService){
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
     newPublication.owner = this.sessionService.getUserInfo().id
     
     let headers = new Headers({ 'Content-Type': 'application/json' });
       var params={
         place: newPublication
       }
       console.log(params)
      return this.http.post(this.newPublicationUrl, params, headers).map(response => response.json());
   }

  DeletePublication(publicationId){
    var publicationUrltoDelete= this.specificPublicationUrl(publicationId)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.delete(publicationUrltoDelete, headers).map(response => response.json() );
  }


}
import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PublicationService{
	//access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"
  //uri:string = "http://api.lvh.me:3000/v1/lugares/categoria/19?access_token="
  //endpoint_url:string = uri+access_token;
	constructor(private http: Http){
       this.http = http;
   }

   getPublications(){
       return this.http.get(this.endpoint_url).map(response => response.json().responseData);
   }


}
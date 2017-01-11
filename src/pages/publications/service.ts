import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PublicationService{
	access_token:string = "6e7764964e6cab6eaa8bf3a984e5b888"
	endpoint_url:string = "http://api.lvh.me:3000/v1/lugares/categoria/19?access_token=6e7764964e6cab6eaa8bf3a984e5b888";
	constructor(private http: Http){
       this.http = http;
   }

   getPublications(){
       return this.http.get(this.endpoint_url).map(response => response.json().responseData);
   }


}
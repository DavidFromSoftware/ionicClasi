import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class PublicationService{
	endpoint_url:String = "http://api.lvh.me:3000/v1/lugares/categoria/19?access_token=6e7764964e6cab6eaa8bf3a984e5b888";

	constructor(http: Http){
       this.http = http;
   }

   getPublications (){
       return this.http.get(this.endpoint_url).map(res => res.json());
   }


}
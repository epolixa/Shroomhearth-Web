import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import frens from '../assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

	private clientId:string = "8x2wh8a3rrk24fhfc2bga1mqjbk3me";
	private streamsUrl:string = "https://api.twitch.tv/helix/streams";
	private headers:HttpHeaders;

  constructor(private http:HttpClient) {
  	this.headers = new HttpHeaders()
  		.set("Client_ID", this.clientId)
  		.set("Content-Type", "application/json");
  }

  getClientId() {
  	return this.clientId;
  }

  getTwitch(): Observable<any> {
  	var usernames = [];
  	for (var i in frens.members) {
  		if (frens.members[i].twitch && frens.members[i].twitch.username) {
  			usernames.push(frens.members[i].twitch.username);
  		}
  	}

  	let params = new HttpParams()
  		.set("user_id", usernames.join(','));

  	return this.http.get(this.streamsUrl, {"headers": this.headers, "params": params});
  }
}

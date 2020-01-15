import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import frens from '../assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

	private clientId:string = "8x2wh8a3rrk24fhfc2bga1mqjbk3me";
	private usersUrl:string = "https://api.twitch.tv/helix/users";
	private streamsUrl:string = "https://api.twitch.tv/helix/streams";
	private videosUrl:string = "https://api.twitch.tv/helix/videos";
	private headers:HttpHeaders;
  constructor(private http:HttpClient) {
  	this.headers = new HttpHeaders()
  		.set("Content-Type", "application/json")
  		.set("Client-ID", this.clientId);
  }

  getClientId() {
  	return this.clientId;
  }

  getUsers(): Observable<any> {
  	let userLoginList:string[] = [];
  	for (var m in frens.members) {
  		if (frens.members[m].twitch && frens.members[m].twitch.login) {
  			userLoginList.push(frens.members[m].twitch.login);
  		}
  	}
  	return this.http.get(this.usersUrl, {"headers": this.headers, "params": function(){
  		let params = new HttpParams();
	  	for (var l in userLoginList) {
	  		params = params.append("login", userLoginList[l]);
	  	}
	  	return params;
  	}()});
  }

  getStreams(users:any[]): Observable<any> {
  	return this.http.get(this.streamsUrl, {"headers": this.headers, "params": function(){
  		let params = new HttpParams();
	  	for (var u in users) {
	  		params = params.append("user_id", users[u].id);
	  	}
	  	return params;
  	}()});
  }

  getVideos(user:any): Observable<any> {
  	return this.http.get(this.videosUrl, {"headers": this.headers, "params": new HttpParams().append("user_id", user.id)});
  }
}

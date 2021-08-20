import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import frens from '../assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

	private clientId:string = "bq5mmoaf4wkpku8gzcwbpr58j0n0l2";
  private clientSecret:string = "ub9srao1i2a05b2nr1228m0af1e5je";
  private token:string = "btzu8v988zwb7hvh4i1y4ore84i2fp"; // generated from Twitch CLI
  private appAccessTokenUrl:string = "https://id.twitch.tv/oauth2/token";
	private usersUrl:string = "https://api.twitch.tv/helix/users";
	private streamsUrl:string = "https://api.twitch.tv/helix/streams";
	private videosUrl:string = "https://api.twitch.tv/helix/videos";
	private headers:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Client-Id", this.clientId)
      .set("Authorization", "Bearer " + this.token);
  }

  getClientId() {
  	return this.clientId;
  }

  getClientSecret() {
    return this.clientSecret;
  }

  getAppAccessToken(scope?:string[]): Observable<any> {
    let headers = new HttpHeaders()
      .set("Client-Id", this.clientId)
      .set("Client-Secret", this.clientSecret)
      .set("Grant-Type", "client_credentials");
    return this.http.post(this.appAccessTokenUrl, {"headers": headers});
  }

  getUsers(): Observable<any> {
  	return this.http.get(this.usersUrl, {"headers": this.headers, "params": function(){
      let params = new HttpParams();
      for (var m in frens.members) {
        if (frens.members[m].twitch) {
          params = params.append("login", frens.members[m].twitch.login);
        }
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

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import frens from 'src/assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

	private clientId:string = "bq5mmoaf4wkpku8gzcwbpr58j0n0l2";
  private clientSecret:string = "ub9srao1i2a05b2nr1228m0af1e5je";
  private appAccessToken:string = ""; // generate dynamically
  private appAccessTokenUrl:string = "https://id.twitch.tv/oauth2/token";
	private usersUrl:string = "https://api.twitch.tv/helix/users";
	private streamsUrl:string = "https://api.twitch.tv/helix/streams";
	private videosUrl:string = "https://api.twitch.tv/helix/videos";
	private headers:HttpHeaders;

  constructor(private http:HttpClient) {
    this.rebuildHeaders();
  }

  getClientId():string {
  	return this.clientId;
  }

  getClientSecret():string {
    return this.clientSecret;
  }

  getAppAccessToken():string {
    return this.appAccessToken;
  }

  setAppAccessToken(appAccessToken:string) {
    this.appAccessToken = appAccessToken;
  }

  rebuildHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Client-Id", this.clientId)
      .set("Authorization", "Bearer " + this.appAccessToken);
  }

  requestAppAccessToken(scope?:string[]):Observable<any> {
    let parameters = {
      "client_id": this.clientId,
      "client_secret": this.clientSecret,
      "grant_type": "client_credentials"
    }
    return this.http.post(this.appAccessTokenUrl, parameters);   
  }

  getUsers(): Observable<any> {
    this.rebuildHeaders();
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

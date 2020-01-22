import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../../twitch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bityard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private twitchUsersSub:Subscription;
	private twitchStreamsSub:Subscription;
	private twitchVideosSubs:Subscription[];

	private users:any[];
	private streams:any[];
	private videos:any[];

  constructor(private twitchService:TwitchService) { }

  ngOnInit() {
  	this.twitchUsersSub = this.twitchService.getUsers().subscribe(response => {
  		this.users = response.data;
  		this.twitchStreamsSub = this.twitchService.getStreams(this.users).subscribe(response => {this.streams = response;});
  		this.twitchVideosSubs = [];
  		this.videos = [];
  		for (var u in this.users) {
  			this.twitchVideosSubs.push(this.twitchService.getVideos(this.users[u]).subscribe(response => {
  				this.videos = this.videos.concat(response.data);
          this.videos.sort((a,b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));
  			  console.log("[home] loaded videos - ", JSON.parse(JSON.stringify(this.videos)));
        }));
  		}
  	});
  }

}

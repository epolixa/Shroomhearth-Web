import { TwitchService } from '../../twitch.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

	private twitchUsersSub:Subscription;
	private twitchStreamsSub:Subscription;
	private twitchVideosSubs:Subscription[];

	private users:any[];
	private streams:any[];
	private pastBroadcasts:any[];

  private pastBroadcastsSortField:any;
  private pastBroadcastsSortOrder:any;
  private pastBroadcastsStreamerKey:any;
  private pastBroadcastsStreamerOptions:any[] = [];

  constructor(private twitchService:TwitchService) { }

  ngOnInit() {
  	this.twitchUsersSub = this.twitchService.getUsers().subscribe(response => {
  		this.users = response.data;
  		this.twitchStreamsSub = this.twitchService.getStreams(this.users).subscribe(response => {this.streams = response;});
  		this.twitchVideosSubs = [];
  		this.pastBroadcasts = [];
  		for (var u in this.users) {
  			this.twitchVideosSubs.push(this.twitchService.getVideos(this.users[u]).subscribe(response => {
  				this.pastBroadcasts = this.pastBroadcasts.concat(response.data);
          this.pastBroadcasts.sort((a,b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));
        }));

        this.pastBroadcastsStreamerOptions.push({
          label: this.users[u].display_name,
          code: this.users[u].login
        });
  		}
  	});
  }

}

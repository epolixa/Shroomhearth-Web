import { TwitchService } from '../../twitch.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-live',
	templateUrl: './live.component.html',
	styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

	private twitchAppAccessTokenSub: Subscription;
	private twitchUsersSub: Subscription;
	private twitchStreamsSub: Subscription;
	private twitchVideosSub: Subscription;

	private twitchUsers: any[];
	private twitchStreams: any[];
	private twitchVideos: any[];

	constructor(private twitchService: TwitchService) { }

	ngOnInit() {
		this.twitchAppAccessTokenSub = this.twitchService.requestAppAccessToken().subscribe(response => {
			this.twitchService.setAppAccessToken(response.access_token);

			this.twitchUsersSub = this.twitchService.getUsers().subscribe(response => {

				this.twitchUsers = response.data;

				this.twitchStreamsSub = this.twitchService.getStreams(this.twitchUsers).subscribe(response => {
					this.twitchStreams = response.data;
				});

				this.twitchVideos = [];
				for (var u in this.twitchUsers) {
					this.twitchVideosSub = this.twitchService.getVideos(this.twitchUsers[u]).subscribe(response => {
						this.twitchVideos = this.twitchVideos.concat(response.data);
						this.twitchVideos.sort((a, b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));
					});
				}

			});
		});

	}

}

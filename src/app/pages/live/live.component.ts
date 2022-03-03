import { TwitchService } from '../../twitch.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-live',
	templateUrl: './live.component.html',
	styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

	public pageTitle:string = "Live";

	private twitchAppAccessTokenSub: Subscription;
	private twitchUsersSub: Subscription;
	private twitchStreamsSub: Subscription;
	private twitchVideosSub: Subscription;

	public twitchUsers: any[];
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
					this.twitchStreams.sort((a, b) => (a.started_at > b.started_at) ? -1 : ((b.started_at > a.started_at) ? 1 : 0));
				});

				this.twitchVideos = [];
				for (var u in this.twitchUsers) {
					this.twitchVideosSub = this.twitchService.getVideos(this.twitchUsers[u]).subscribe(response => {
						this.twitchVideos = this.twitchVideos.concat(response.data);
						this.twitchVideos = this.twitchVideos.filter(v => this.filterVideo(v));
						this.twitchVideos.sort((a, b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));
					});
				}
				
			});
		});

	}

	getUserFromStream(userId:string) {
		return this.twitchUsers.find(u => u.id == userId);
	}

	getStreamThumbnailUrl(url:string) {
		return url.replace("{width}", "320").replace("{height}", "180");
	}

	filterVideo(v:any) {
		return v.thumbnail_url.length > 0 // exclude vods of incomplete streams
		&& v.type == "archive"; // only include past broadcasts
	}

}

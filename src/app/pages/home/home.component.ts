import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../../twitch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bityard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private twitchServiceSubscription:Subscription;

	private streams:any;

  constructor(private twitchService:TwitchService) { }

  ngOnInit() {
  	this.twitchServiceSubscription = this.twitchService.getTwitch().subscribe(response => {
  		console.log(response);
  	});
  }

}

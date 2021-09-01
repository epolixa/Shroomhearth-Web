import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MinecraftService } from '../../minecraft.service';

@Component({
  selector: 'bityard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private titleText:string; 
	private bannerSource:string;
  private titleLogoSource:string;
	private taglineText:string;

  private minecraftServerStatusSub:Subscription;

  constructor(private minecraftService:MinecraftService) { }

  ngOnInit() {
  	this.titleText = "Bityard";
  	this.bannerSource = "assets/images/header.jpg";
    this.titleLogoSource = "assets/images/bityard_logo_2020.png";

    this.minecraftServerStatusSub = this.minecraftService.getServerStatus("104.243.41.80").subscribe(response => {
      this.taglineText = response.motd.html;
    });
  }

}

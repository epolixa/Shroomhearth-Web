import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  	this.titleText = "Bityard";
  	this.bannerSource = "assets/images/header.jpg";
    this.titleLogoSource = "assets/images/bityard_logo_2020.png";
  	this.taglineText= "Minecraft and more!";
  }

}

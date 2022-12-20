import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'shroomhearth-mobile-navigation',
	templateUrl: './mobile-navigation.component.html',
	styleUrls: ['./mobile-navigation.component.css']
})
export class MobileNavigationComponent implements OnInit {

	public links: { label: string, route: string }[];

	constructor() { }

	ngOnInit() {
		this.links = [
			{ label: "Home", route: "" },
			{ label: "About", route: "about" },
			{ label: "Minecraft", route: "minecraft" },
			{ label: "Live", route: "live" },
			{ label: "Downloads", route: "downloads" }
		];
	}

}

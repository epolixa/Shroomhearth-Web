import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'shroomhearth-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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

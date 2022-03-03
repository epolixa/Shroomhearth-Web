import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bityard-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

	@Input() video:any;

	private thumbnailWidth:string = "320";
	private thumbnailHeight:string = "180";

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.video.currentValue.thumbnail_url) {
    	this.video.thumbnail_url = this.video.thumbnail_url.replace("%{width}", this.thumbnailWidth).replace("%{height}", this.thumbnailHeight);
    }
  }

}

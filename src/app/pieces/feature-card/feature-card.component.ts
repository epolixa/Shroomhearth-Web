import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shroomhearth-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input() image:string;
  @Input() title:string;
  @Input() description:string;
  @Input() tags:string[];

  constructor() {}

  ngOnInit() {}

}

import { Component, OnInit, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

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

  public state:"collapsed"|"expanded" = "collapsed";

  constructor() {}

  ngOnInit() {}

  public toggleState() {
    this.state == "collapsed" ? this.state = "expanded" : this.state = "collapsed";
  }

}

import { Component, OnInit } from '@angular/core';
import { ShroomhearthService } from 'src/app/shroomhearth.service';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public pageTitle:string = "About";

  public shroomhearthName:string;

  public timelineEvents:any[];

  constructor(
    private shroomhearth:ShroomhearthService
  ) { }

  ngOnInit() {
    this.shroomhearthName = this.shroomhearth.getName();

    this.timelineEvents = [
      {text:"Purephun",date:"2013"},
      {text:"Minesmash",date:"2014"},
      {text:"Bityard server started on World 1",date:"12/10/2014"},
      {text:"World 2 started",date:"10/12/2016"},
      {text:"World 3 started",date:"06/03/2017"},
      {text:"World 4 started",date:"8/26/2018"},
      {text:"Bityard renamed to Shroomhearth",date:"11/27/2021"},
      {text:"World 5 started",date:"12/04/2021"},
      {text:"Today",date:new Date()}
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { ShroomhearthService } from 'src/app/shroomhearth.service';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public pageTitle: string = "About";

  public shroomhearthName: string;

  // Significant dates
  private today: Date;
  private shroomhearthStarted: Date;
  private currentWorldStarted: Date;
  public shroomhearthActive: number;
  public currentWorldActive: number;

  public timelineEvents: any[];

  constructor(
    private shroomhearth: ShroomhearthService
  ) { }

  ngOnInit() {
    this.shroomhearthName = this.shroomhearth.getName();

    this.today = new Date();
    this.shroomhearthStarted = new Date("12/10/2014");
    this.currentWorldStarted = new Date("12/04/2021");

    this.shroomhearthActive = Math.trunc(this.daysBetween(this.shroomhearthStarted, this.today));
    this.currentWorldActive = Math.trunc(this.daysBetween(this.currentWorldStarted, this.today));

    this.timelineEvents = [
      { text: "Purephun server Started", date: "11/04/2013" },
      { text: "Minesmash server Started", date: "01/17/2014" },
      { text: "Bityard server started on World 1", date: this.shroomhearthStarted },
      { text: "World 2 started", date: "10/12/2016" },
      { text: "World 3 started", date: "06/03/2017" },
      { text: "World 4 started", date: "8/26/2018" },
      { text: "Bityard renamed to Shroomhearth", date: "11/27/2021" },
      { text: "World 5 started", date: this.currentWorldStarted },
      { text: "Today", date: this.today }
    ];
  }

  private treatAsUTC(date:Date):Date {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  private daysBetween(startDate:Date, endDate:Date):number {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (this.treatAsUTC(endDate).getTime() - this.treatAsUTC(startDate).getTime()) / millisecondsPerDay;
  }

}

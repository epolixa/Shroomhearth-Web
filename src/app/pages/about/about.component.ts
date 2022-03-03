import { Component, OnInit } from '@angular/core';
import { ShroomhearthService } from 'src/app/shroomhearth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public pageTitle:string = "About";

  public shroomhearthName:string;

  constructor(
    private shroomhearth:ShroomhearthService
  ) { }

  ngOnInit() {
    this.shroomhearthName = this.shroomhearth.getName();
  }

}

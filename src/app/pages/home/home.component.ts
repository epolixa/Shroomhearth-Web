import { Component, OnInit } from '@angular/core';
import { ShroomhearthService } from 'src/app/shroomhearth.service';

@Component({
  selector: 'bityard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public shroomhearthName:string;

  constructor(
    private shroomhearth:ShroomhearthService
  ) {}

  ngOnInit() {
    this.shroomhearthName = this.shroomhearth.getName();
  }

}

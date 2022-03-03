import { Component, OnInit } from '@angular/core';

import downloads from 'src/assets/data/downloads.json';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  public pageTitle:string = "Downloads";

  public worlds: any;

  constructor() { }

  ngOnInit() {
    this.worlds = downloads.worlds;
  }

}

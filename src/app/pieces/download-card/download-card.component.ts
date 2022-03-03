import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shroomhearth-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.css']
})
export class DownloadCardComponent implements OnInit {

  @Input() download:any;

  constructor() { }

  ngOnInit() {
  }

}

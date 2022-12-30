import { Component, OnInit } from '@angular/core';
import { ShroomhearthService } from 'src/app/shroomhearth.service';

import home_slideshow_captions from 'src/assets/data/home_slideshow_captions.json';

@Component({
  selector: 'shroomhearth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageTitle:string = "Welcome to Shroomhearth";

  public shroomhearthName:string;

  public slides = [];
  public slideConfig = {
    autoplay: true,
    arrows: false
  };

  constructor(
    private shroomhearth:ShroomhearthService
  ) {}

  ngOnInit() {
    this.shroomhearthName = this.shroomhearth.getName();

    // init slides
    for (let i = 1; i <= 30; i++) {
      this.slides.push({
        img: "assets/images/home_slideshow/slide_" + i + ".png",
        caption: home_slideshow_captions["slide_" + i]
      });
    }
    this.slides = this.shroomhearth.shuffleArray(this.slides);
  }

}

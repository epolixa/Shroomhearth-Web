import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShroomhearthService } from 'src/app/shroomhearth.service';
import { MinecraftService } from '../../minecraft.service';

@Component({
  selector: 'shroomhearth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private titleText: string;
  public bannerSource: string;
  public titleLogoSource: string;
  public titleWordartSource: string;
  public taglineText: string;

  private minecraftServerStatusSub: Subscription;

  constructor(
    private shroomhearth:ShroomhearthService,
    private minecraftService:MinecraftService
  ) { }

  ngOnInit() {
    this.titleText = this.shroomhearth.getName();
    this.bannerSource = "assets/images/header.jpg";
    this.titleLogoSource = "assets/images/shroomhearth_logo_2021.png";
    this.titleWordartSource = "assets/images/shroomhearth_wordart_transparent.png";

    this.minecraftServerStatusSub = this.minecraftService.getServerStatus().subscribe(response => {
      this.taglineText = response.motd.html;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MinecraftService } from '../../minecraft.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
import { ScriptService } from 'src/app/script.service';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


import features from 'src/assets/data/features.json';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {

  public pageTitle:string = "Minecraft";

  public showBluemap: boolean = false;
  public bluemapStateOptions: any[] = [{label:"Hide",value:false},{label:"Show",value:true}];
  public ip: string;
  public version: string;
  public online: boolean;
  public avatars: any[];
  public bluemapUrl: string;
  public safeBluemapUrl: SafeResourceUrl;

  private minecraftServerStatusSub:Subscription;
  private minecraftAvatarSub:Subscription;

  public datapackFeatures:any;

  constructor(
    private minecraftService:MinecraftService,
    private script:ScriptService,
    private sanitizer:DomSanitizer
    ) {
    this.ip = this.minecraftService.getAddress();
    this.bluemapUrl = "http://" + this.ip + ":25569/";
    this.safeBluemapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bluemapUrl + "#world:112:0:0:500:0:0:0:1:flat");
  }

  ngOnInit() {
    this.datapackFeatures = features.datapack;

    this.avatars = [];
    this.minecraftServerStatusSub = this.minecraftService.getServerStatus().subscribe(response => {
      this.version = response.version;
      this.online = response.online;
      let uuid = response.players.uuid;
      if (uuid) {
        for (let u in uuid) {
          this.minecraftAvatarSub = this.minecraftService.getHeadRender(uuid[u]).subscribe(response => {
            let reader = new FileReader();
            reader.addEventListener("load", () => {
              this.avatars.push({
                name: u,
                namemc: this.buildNameMcUrl(uuid[u]),
                src: reader.result
              });
            }, false);
            if (response) {
              reader.readAsDataURL(response);
            }            
          });
        }
      }
    });

    this.script.load('trello').then(data => {console.log("trello script loaded", data)}).catch(error => console.log(error));
  }

  public toggleBluemap() {
    this.showBluemap = !this.showBluemap;
  }

  public buildNameMcUrl(uuid: string) {
    return "https://namemc.com/search?q=" + uuid;
  }

}

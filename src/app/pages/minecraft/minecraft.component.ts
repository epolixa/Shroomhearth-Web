import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MinecraftService } from '../../minecraft.service';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {

  private showBluemap: boolean = false;
  private version: string;
  private avatars: any[];

  private minecraftServerStatusSub:Subscription;
  private minecraftAvatarSub:Subscription;

  constructor(private minecraftService:MinecraftService) { }

  ngOnInit() {
    this.avatars = [];
    this.minecraftServerStatusSub = this.minecraftService.getServerStatus("104.243.41.80").subscribe(response => {
      this.version = response.version;
      let uuid = response.players.uuid;
      if (uuid) {
        for (let u in uuid) {
          this.minecraftAvatarSub = this.minecraftService.getHeadRender(uuid[u]).subscribe(response => {
            let reader = new FileReader();
            reader.addEventListener("load", () => {
              this.avatars.push({
                name: u,
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
  }

}

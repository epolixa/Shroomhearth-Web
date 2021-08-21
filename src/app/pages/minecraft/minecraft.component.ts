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
  private avatars: any[];

  private minecraftServerStatusSub:Subscription;
  private minecraftAvatarSub:Subscription;

  constructor(private minecraftService:MinecraftService) { }

  ngOnInit() {
    this.avatars = [];
    this.minecraftServerStatusSub = this.minecraftService.getServerStatus("104.243.41.80").subscribe(response => {
      let uuid = response.players.uuid;
      if (uuid) {
        let uuids:string[] = Object.values(uuid);
        for (let u of uuids) {
          this.minecraftAvatarSub = this.minecraftService.getAvatar(u).subscribe(response => {
            let reader = new FileReader();
            reader.addEventListener("load", () => {
              this.avatars.push(reader.result);
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

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

  private minecraftServerStatusSub:Subscription;

  constructor(private minecraftService:MinecraftService) { }

  ngOnInit() {
    this.minecraftServerStatusSub = this.minecraftService.getServerStatus("104.243.41.80").subscribe();
  }

}

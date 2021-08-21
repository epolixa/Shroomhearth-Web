import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import frens from '../assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class MinecraftService {

  private serverStatusUrl:string = "https://api.mcsrvstat.us/2/"; // https://api.mcsrvstat.us/
  private avatarUrl:string = "https://crafatar.com/avatars/"; // https://crafatar.com/

  constructor(private http:HttpClient) {}

  getServerStatus(address:string): Observable<any> {
    return this.http.get(this.serverStatusUrl + address);
  }

  getAvatar(uuid:string): Observable<any> {
    return this.http.get(this.avatarUrl + uuid, {responseType: 'blob'});
  }

}

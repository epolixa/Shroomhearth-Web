import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import frens from '../assets/data/frens.json';

@Injectable({
  providedIn: 'root'
})
export class MinecraftService {

  // https://api.mcsrvstat.us/
  private serverStatusUrl:string = "https://api.mcsrvstat.us/2/";

  constructor(private http:HttpClient) {}

  getServerStatus(address:any): Observable<any> {
    return this.http.get(this.serverStatusUrl + address);
  }

}

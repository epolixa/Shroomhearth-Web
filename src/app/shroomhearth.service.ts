import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShroomhearthService {

    private name:string = "Shroomhearth";

    constructor() {}

    getName():string {
        return this.name;
    }
}
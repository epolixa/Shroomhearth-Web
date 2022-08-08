import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShroomhearthService {

    private name: string = "Shroomhearth";

    constructor() { }

    getName(): string {
        return this.name;
    }

    /* Takes an array and shuffles it */
    shuffleArray(array: any[]): any[] {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
}
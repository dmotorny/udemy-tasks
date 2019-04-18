import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    constructor() { }

    /**
     * Interval
     */
    interval: any;

    /**
     * Number
     */
    number = 1;

    /**
     * Odd
     */
    odd: number;

    /**
     * Even
     */
    even: number;

    ngOnInit() { }

    /**
     * Start game
     * 
     * @method startGame
     * @returns void
     */
    startGame() {
        this.interval = setInterval(() => {
            if (this.number % 2 === 0) {
                this.even = this.number;
            } else {
                this.odd = this.number;
            }
            this.number++;
        }, 1000);
    }

    /**
     * Stop game
     * 
     * @method stopGame
     * @returns void
     */
    stopGame() {
        clearInterval(this.interval);
    }

}

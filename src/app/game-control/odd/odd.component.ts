import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

    /**
     * Numbers
     */
    numbers: Array<number> = [];

    /**
     * Number
     */
    @Input() number: number;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.numbers.push(this.number);
    }
}

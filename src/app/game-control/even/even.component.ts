import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

    /**
     * Numbers
     */
    numbers: Array<number> = [];

    /**
     * Number
     */
    @Input() number: number;

    constructor() { }

    ngOnInit() {}

    ngOnChanges() {
      this.numbers.push(this.number);
    }

}

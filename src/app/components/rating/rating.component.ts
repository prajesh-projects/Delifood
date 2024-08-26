import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  numbers
  @Input()
  star!: number;
  constructor() {
    this.numbers = Array(5).fill(0).map((x, i) => i);
  }
}

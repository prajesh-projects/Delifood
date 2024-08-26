import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-progressbar',
  templateUrl: './rating-progressbar.component.html',
  styleUrl: './rating-progressbar.component.scss'
})
export class RatingProgressbarComponent {
  @Input() value?: string;
  @Input() prefix?: string;
  constructor() {
    let val = document.querySelector("[data-automation]")
    console.log(val);
  }
}

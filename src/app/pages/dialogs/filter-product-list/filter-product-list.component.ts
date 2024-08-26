import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-filter-product-list',
  templateUrl: './filter-product-list.component.html',
  styleUrl: './filter-product-list.component.scss'
})
export class FilterProductListComponent {
  constructor(private cd: ChangeDetectorRef) { }
  minValue: number = 300;
  maxValue: number = 500;
  rating= '4.0+'
}

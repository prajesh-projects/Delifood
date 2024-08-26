import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-filter-store-list',
  templateUrl: './filter-store-list.component.html',
  styleUrl: './filter-store-list.component.scss'
})
export class FilterStoreListComponent {
  constructor(private cd: ChangeDetectorRef) { }
  minValue: number = 300;
  maxValue: number = 500;
  rating= '4.0+'
}

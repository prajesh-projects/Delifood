import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  selectedLag = 'English';
  selectedNation = 'India';
  
  Language = [
    {id: 1, name: 'English', avatar: './assets/images/ic-world.svg'},
    {id: 2, name: 'Franch', avatar: './assets/images/ic-world.svg'},
    {id: 3, name: 'Spanish', avatar: './assets/images/ic-world.svg'}
];

Nationality = [
  {id: 1, name: 'India', avatar: './assets/images/ic-flag-india.svg'},
  {id: 2, name: 'Franch', avatar: './assets/images/ic-flag-india.svg'},
  {id: 3, name: 'Spanish', avatar: './assets/images/ic-flag-india.svg'}
];
}

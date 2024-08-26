import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-address-block',
  templateUrl: './address-block.component.html',
  styleUrl: './address-block.component.scss'
})
export class AddressBlockComponent {


  @Input() classes?: string;
  @Input() icon?: string;


  constructor(private elementRef: ElementRef) { }

  onActive(event: any) {
    const items = document.querySelectorAll(".address-block")
    items.forEach(elRef => {
      if (elRef === event.currentTarget) {
        elRef.classList.add('active');
      }
      else {
        elRef.classList.remove('active');
      }
    });
  }

}

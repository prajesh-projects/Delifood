import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrl: './icon-select.component.scss'
})
export class IconSelectComponent  implements AfterViewInit {

  selected = "option2";
  @ViewChild('matSelect') matSelect!: MatSelect;

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(value => {
        console.log(value);
    });
}
}

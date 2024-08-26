import { Component, Input } from '@angular/core';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';

@Component({
  selector: 'app-rage-slider',
  templateUrl: './rage-slider.component.html',
  styleUrl: './rage-slider.component.scss'
})
export class RageSliderComponent {

  @Input()
  min!: number;
  @Input()
  max!: number;
  @Input()
  step!: number;
  @Input()
  minv!: number;
  @Input()
  suffix!: string;
  @Input()
  prefix!: string;
  @Input()
  maxv!: number;
  result:any = [];

  constructor(private globalVariablesService: GlobalVariablesServiceService) {}

  ngAfterViewInit(): void {
    
    if(this.min != null && this.max && this.step){
      for (let index = this.min; index <= this.max; index+=this.step) {
        this.result.push(index);
      }
    }
  }

  startSetting(event:any) {
    this.globalVariablesService.setMinValue(Number((event.target as HTMLInputElement).value));
    // console.log((event.target as HTMLInputElement).value);
  }

  endSetting(event:any) {
    this.globalVariablesService.setMaxValue(Number((event.target as HTMLInputElement).value));
  }
}

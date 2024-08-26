import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesServiceService {
  private minValue: number = 0;
  private maxValue: number = 0;
  isLogin = false;
  couponApply = false;

  constructor() {}
  // Getter for minValue
  getMinValue(): number {
    return this.minValue;
  }

  // Setter for minValue
  setMinValue(value: number): void {
    this.minValue = value;
  }

  // Getter for maxValue
  getMaxValue(): number {
    return this.maxValue;
  }

  // Setter for maxValue
  setMaxValue(value: number): void {
    this.maxValue = value;
  }
}

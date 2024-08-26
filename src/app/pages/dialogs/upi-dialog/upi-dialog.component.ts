import { Component } from '@angular/core';

@Component({
  selector: 'app-upi-dialog',
  templateUrl: './upi-dialog.component.html',
  styleUrl: './upi-dialog.component.scss',
})
export class UpiDialogComponent {
  upidetails = false;
  changeUpi() {
    this.upidetails = true;
  }
}

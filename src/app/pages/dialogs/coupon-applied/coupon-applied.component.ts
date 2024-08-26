import { Component } from '@angular/core';
import { CouponsDialogComponent } from '../coupons-dialog/coupons-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-coupon-applied',
  templateUrl: './coupon-applied.component.html',
  styleUrl: './coupon-applied.component.scss',
})
export class CouponAppliedComponent {

  constructor( public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CouponsDialogComponent, {
      panelClass: 'md-modal',
      autoFocus:false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}

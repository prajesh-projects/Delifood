import { Component } from '@angular/core';
import { CouponsDialogComponent } from '../dialogs/coupons-dialog/coupons-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(
    public dialog: MatDialog,
    // private globalVariablesService: GlobalVariablesServiceService
  ) {
    // console.log(this.isCuponApply);
  }
  // isCuponApply = this.globalVariablesService.couponApply;

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

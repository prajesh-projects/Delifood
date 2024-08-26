import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelOrderComponent } from '../dialogs/cancel-order/cancel-order.component';
import { FilterOrderListComponent } from '../dialogs/filter-order-list/filter-order-list.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}
  openDialog() {
    const dialogRef = this.dialog.open(CancelOrderComponent, {
      panelClass: 'md-modal',
      autoFocus:false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  filterOrder() {
    const dialogRef = this.dialog.open(FilterOrderListComponent, {
      panelClass: 'mdl-modal',
      autoFocus:false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

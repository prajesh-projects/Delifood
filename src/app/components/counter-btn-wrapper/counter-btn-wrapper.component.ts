import { Component, Input, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedToCartDialogComponent } from '../../pages/dialogs/added-to-cart-dialog/added-to-cart-dialog.component';

@Component({
  selector: 'app-counter-btn-wrapper',
  templateUrl: './counter-btn-wrapper.component.html',
  styleUrl: './counter-btn-wrapper.component.scss'
})
export class CounterBtnWrapperComponent {

  @Input() onlyCounter?: boolean;

  counter: number = 1;
  increment() {
    this.counter++
  }

  decrement() {
    if (this.counter != 0) this.counter--
  }

  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(AddedToCartDialogComponent, {
      panelClass: 'md-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickupScheduleDialogComponent } from '../../pages/dialogs/pickup-schedule-dialog/pickup-schedule-dialog.component';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrl: './item-box.component.scss'
})
export class ItemBoxComponent {

  @Input() Class?: string;
  @Input() RouterLink?: string;
  @Input() Img?: string;
  @Input() ItemName?: string;
  @Input() Location?: string;
  @Input() ShopName?: string;
  @Input() TotalReview?: string;
  @Input() TotalRate?: string;
  @Input() Price?: string;
  @Input() Unit?: string;
  @Input() pickSchedule?: boolean;
  @Input() CounterBtn?: boolean;


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PickupScheduleDialogComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

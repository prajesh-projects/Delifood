import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickupScheduleSuccessDialogComponent } from '../pickup-schedule-success-dialog/pickup-schedule-success-dialog.component';

@Component({
  selector: 'app-pickup-schedule-dialog',
  templateUrl: './pickup-schedule-dialog.component.html',
  styleUrl: './pickup-schedule-dialog.component.scss',
})
export class PickupScheduleDialogComponent {
  constructor(public dialog: MatDialog) {}

  pickupSheduleSuccess() {
    const dialogRef = this.dialog.open(PickupScheduleSuccessDialogComponent, {
      panelClass: 'md-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

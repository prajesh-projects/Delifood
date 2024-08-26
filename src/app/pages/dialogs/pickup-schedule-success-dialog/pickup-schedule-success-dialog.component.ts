import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickupDetailsDailogComponent } from '../pickup-details-dailog/pickup-details-dailog.component';

@Component({
  selector: 'app-pickup-schedule-success-dialog',
  templateUrl: './pickup-schedule-success-dialog.component.html',
  styleUrl: './pickup-schedule-success-dialog.component.scss',
})
export class PickupScheduleSuccessDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PickupDetailsDailogComponent, {
      panelClass: 'md-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

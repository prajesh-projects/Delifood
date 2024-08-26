import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickupScheduleDialogComponent } from '../pickup-schedule-dialog/pickup-schedule-dialog.component';

@Component({
  selector: 'app-choose-store-location',
  templateUrl: './choose-store-location.component.html',
  styleUrl: './choose-store-location.component.scss'
})
export class ChooseStoreLocationComponent {

  
  constructor(public dialog: MatDialog) { }
  pickupDialogOpen() {
    const dialogRef = this.dialog.open(PickupScheduleDialogComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

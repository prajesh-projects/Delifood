import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpiDialogComponent } from '../dialogs/upi-dialog/upi-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(UpiDialogComponent, {
      panelClass: 'mdl-modal',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  // cradit card -----------------------------
  editCard = false;
  addCard = false;

  editcard(){
    this.editCard = true;
  }
  backSavedCard() {
    this.editCard = false;
    this.addCard = false;
  }
  addNewCard() {
    this.addCard = true;
    this.editCard = false;

  }

  // UPI card -----------------------------
  editUpi = false;
  addUpi = false 

  editupi() {
    this.editUpi = true;
  }
  savedUpi() {
    this.editUpi = false;
    this.addUpi = false 
  }
  addNewUpi() {
    this.addUpi = true;
    this.editUpi = false;
  }

  // Address card -----------------------------
  addAddress = false;
  editAddress = false;
  editaddr() {
    this.editAddress = true;
  }
  savedaddr() {
    this.editAddress = false;
    this.addAddress = false 
  }
  addNewAdd() {
    this.addAddress = true;
    this.editAddress = false;
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelSuccessDialogComponent } from '../cancel-success-dialog/cancel-success-dialog.component';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrl: './cancel-order.component.scss'
})
export class CancelOrderComponent {

  textarea= false;
  uploadDiv = false;

  radioButtonChanged(event: any){
    let radioValue = event.value;
    console.log(radioValue);
     if(radioValue == 'Other'){
        this.textarea = true;
     }else if(radioValue == '1'){
        this.uploadDiv = true
         console.log(radioValue);
        event.checked = true
     }else{
        this.textarea = false;
        this.uploadDiv = false;
     }
  }

  uploadClick() {
    this.uploadDiv = true
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CancelSuccessDialogComponent,{
      panelClass: 'md-modal',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

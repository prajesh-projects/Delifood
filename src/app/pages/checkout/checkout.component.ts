import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpiDialogComponent } from '../dialogs/upi-dialog/upi-dialog.component';
import { OrderPlacedDialogComponent } from '../dialogs/order-placed-dialog/order-placed-dialog.component';
import { StoreNotFoundComponent } from '../dialogs/store-not-found/store-not-found.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  shippingBody = false;
  signupBlock = false;
  otpBlock = false;
  signupCompleted = false;
  signupbtn = true;
  selectAddress = true;
  shippingAdd = false;
  addressComplation = false;

  selectPaymentMethod = true;
  billingBody = false;
  editBillAdd = false;
  activeUpi = true;
  activeCard = false;
  addCard = false;
  addUpi = false;
  netBanking = false;
  otherPayments = false;
  billingComplated = false;

  signup() {
    this.signupbtn = false;
    this.signupBlock = true;
  }
  getOtp() {
    this.signupBlock = false;
    this.otpBlock = true;
  }
  verifyOtp() {
    this.otpBlock = false;
    this.signupCompleted = true;
    this.shippingBody = true;
  }

  toggleChip(event: any) {
    const chips = document.querySelectorAll('.chip');
    chips.forEach((elRef) => {
      elRef.classList.remove('active');
    });
    event.currentTarget.classList.toggle('active');
  }

  toggleUpiCard(event: any) {
    const chips = document.querySelectorAll('.upi-card');
    chips.forEach((elRef) => {
      elRef.classList.remove('active');
    });
    event.currentTarget.classList.toggle('active');
  }


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(UpiDialogComponent, {
      panelClass: 'mdl-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openOrderDialog() {
    const dialogRef = this.dialog.open(OrderPlacedDialogComponent, {
      panelClass: 'md-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openStoreNotFound() {
    const dialogRef = this.dialog.open(StoreNotFoundComponent, {
      panelClass: 'md-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addAddress() {
    this.shippingAdd = true;
    this.selectAddress = false;
  }
  addedAddress() {
    this.shippingAdd = false;
    this.selectAddress = true;
  }

  shipingComplate() {
    this.shippingAdd = false;
    this.selectAddress = false;
    this.addressComplation = true;
    this.billingBody = true;
    this.selectPaymentMethod = true;
    this.activeUpi = true;
  }

  editShipping()
  {
    this.selectAddress = true;
    this.addressComplation = false;
    this.billingBody = false;
    this.billingComplated = false;
    console.log( this.shippingBody);
    this.shippingBody = true;
  }

  editBillAdds() {
    this.editBillAdd = true;
  }

  activeUpiF() {
    this.addUpi = false;
    this.activeUpi = true;
    this.addCard = false;
    this.activeCard = false;
    this.netBanking = false;
    this.otherPayments = false;
  }
  activeCardF() {
    this.addUpi = false;
    this.activeUpi = false;
    this.addCard = false;
    this.activeCard = true;
    this.netBanking = false;
    this.otherPayments = false;
  }
  activeNetBankingF() {
    this.addUpi = false;
    this.activeUpi = false;
    this.addCard = false;
    this.activeCard = false;
    this.netBanking = true;
    this.otherPayments = false;
  }
  activeOtherPayment() {
    this.addUpi = false;
    this.activeUpi = false;
    this.addCard = false;
    this.activeCard = false;
    this.netBanking = false;
    this.otherPayments = true;
  }
  addNewCard() {
    this.addUpi = false;
    this.activeUpi = false;
    this.activeCard = false;
    this.netBanking = false;
    this.addCard = true;
  }
  addNewUpi() {
    this.addUpi = true;
    this.activeUpi = false;
    this.addCard = false;
    this.activeCard = false;
    this.netBanking = false;
  }

  nextBilling() {
    this.addUpi = false;
    this.activeUpi = false;
    this.addCard = false;
    this.activeCard = false;
    this.netBanking = false;
    this.selectPaymentMethod = false;
    this.billingComplated = true;
    this.otherPayments = false;
    this.editBillAdd = false;
  }

  editBilling()
  {
    this.activeUpi = true;
    this.selectPaymentMethod = true;
    this.billingComplated = false;
    this.billingBody = true;
  }

}

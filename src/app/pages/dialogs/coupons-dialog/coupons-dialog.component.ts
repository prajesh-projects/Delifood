import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as confetti from 'canvas-confetti';
import { CouponAppliedComponent } from '../coupon-applied/coupon-applied.component';
import { GlobalVariablesServiceService } from '../../../shared/global-variables-service.service';
@Component({
  selector: 'app-coupons-dialog',
  templateUrl: './coupons-dialog.component.html',
  styleUrl: './coupons-dialog.component.scss',
})
export class CouponsDialogComponent {
  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    public dialog: MatDialog,
    private globalVariablesService: GlobalVariablesServiceService
  ) {}

  public celebrate(): void {
    const canvas = this.renderer2.createElement('canvas');
    canvas.className = 'aClassName';
    this.renderer2.appendChild(document.body, canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true, // will fit all screen sizes
    });

    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      canvas.remove();
    }, 3000);

    const dialogRef = this.dialog.open(CouponAppliedComponent, {
      panelClass: 'md-modal',
      autoFocus:false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });

    this.globalVariablesService.couponApply = true;
    console.log(this.globalVariablesService.couponApply);
  }
}

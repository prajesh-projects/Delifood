import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resend-timer',
  templateUrl: './resend-timer.component.html',
  styleUrl: './resend-timer.component.scss'
})
export class ResendTimerComponent {
  // @ViewChild('concernedCircle') concernedCircle: ElementRef | undefined;

  // a = 440; // Adjust values as needed
  // b = 100;   // Adjust values as needed
  // percentage = 100; // Adjust values as needed

  // constructor(private renderer: Renderer2) { }

  // ngAfterViewInit() {
  //   if (this.concernedCircle) {
  //     const finalOffset = Math.round(this.a - (this.a * this.percentage) / this.b);
  //     this.renderer.setStyle(this.concernedCircle.nativeElement, 'strokeDashoffset', `${finalOffset}px`);
  //   }
  // }


  count: number = 100;
  intervalId: any;
  isComplated = false;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (this.count > 0) {
        this.count--;
        this.isComplated = false;
      } else {
        clearInterval(this.intervalId);
        this.isComplated = true;
      }
    }, 100); 
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.isComplated = true;
    }
  }


  reset() {
    this.isComplated = false;
    this.startCountdown();
    this.count = 100
  }

}




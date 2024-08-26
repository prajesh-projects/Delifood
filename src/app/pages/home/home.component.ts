import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddressSliderComponent } from '../../components/address-slider/address-slider.component';
import { Title } from '@angular/platform-browser';
import KeenSlider, { KeenSliderInstance } from 'keen-slider'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private titleService: Title, private cdr: ChangeDetectorRef) {
    this.titleService.setTitle("DeliFood | Home");
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(LocationDialog,{
      panelClass: 'md-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  // slider -----------------------------------------------
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;
  currentSlide: number = 0
  slider!: KeenSliderInstance;
  dotHelper: Array<Number> = []
  nextDisabled = true;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 1240) {
      this.nextDisabled = false;
    } else {
      this.nextDisabled = true;
    }
  }

  
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      slides: {
        perView: 4,
        spacing: 36,
      },
      breakpoints: {
        "(max-width: 1199px)": {
          slides: { perView: 3.5,  spacing: 20 },
        },
        "(max-width: 991px)": {
          slides: { perView: 3,  spacing: 20 },
        },
        "(max-width: 767px)": {
          slides: { perView: 2,  spacing: 20 },
        },
        "(max-width: 575px)": {
          slides: { perView: 1,  spacing: 20 },
        },
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
        if (this.currentSlide === s.track.details.maxIdx) {
          this.nextDisabled = true;
        } else {
          this.nextDisabled = false;
        }
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
    this.updateNavigationVisibility();
    this.cdr.detectChanges();
  }

  updateNavigationVisibility() {
    if (this.currentSlide === this.slider.track.details.maxIdx) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }
}


@Component({
  selector: 'location-dialog',
  templateUrl: './location-dialog.html',
 
})
export class LocationDialog {
  hide: any = false
  addressVisible() {
    this.hide = true
  }
}
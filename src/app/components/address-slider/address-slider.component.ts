import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider'

@Component({
  selector: 'app-address-slider',
  templateUrl: './address-slider.component.html',
  styleUrl: './address-slider.component.scss'
})
export class AddressSliderComponent {

  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;
  currentSlide: number = 0
  slider!: KeenSliderInstance;
  dotHelper: Array<Number> = []
  totSlider: number = 0;
  perViewSlide = 2.5;
  nextDisabled = false;

  constructor(private cdr: ChangeDetectorRef) { }
  
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      slides: {
        perView: this.perViewSlide,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 767px)": {
          slides: { perView: 2,  spacing: 20 },
        },
        "(max-width: 575px)": {
          slides: { perView: 1,  spacing: 20 },
        },
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
        this.updateNavigationVisibility();
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
    this.totSlider=this.slider.track.details.slides.length
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
  
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

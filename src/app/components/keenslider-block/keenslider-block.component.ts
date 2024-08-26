import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider'

@Component({
  selector: 'app-keenslider-block',
  templateUrl: './keenslider-block.component.html',
  styleUrl: './keenslider-block.component.scss'
})
export class KeensliderBlockComponent {
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;

  currentSlide: number = 0
  slider!: KeenSliderInstance;
  nextDisabled = false;
  prevDisabled = false;

  constructor(private cdr: ChangeDetectorRef) { }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    setTimeout(this.ngAfterViewInit, 500)
   
  }

  ngAfterViewInit() {
    const slideCount = this.sliderRef.nativeElement.querySelectorAll('.keen-slider__slide').length;
    this.currentSlide = slideCount
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: slideCount,
      mode: "snap",
      loop: false,
      slides: {
        perView: 'auto',
        spacing: 16,
      },
      breakpoints: {
        '(max-width: 767.98px)': {
          slides: {  perView: 'auto',spacing: 10},
        },
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
        this.updateNavigationVisibility();
      },
    })
    // this.totSlider=this.slider.track.details.slides.length
    this.updateNavigationVisibility();
    this.cdr.detectChanges();
  }

  updateNavigationVisibility() {
    if (this.currentSlide >= this.slider.track.details.maxIdx) {
      this.nextDisabled = true;
      this.prevDisabled = false;
    } else {
      this.nextDisabled = false;
      this.prevDisabled = false;
    }
    if(this.slider.track.details.rel == 0) {
      this.prevDisabled = true;
    }
  }
  
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

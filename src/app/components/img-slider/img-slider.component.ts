import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider'

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.scss'
})
export class ImgSliderComponent {
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;
  currentSlide: number = 1
  slider: any = null
  dotHelper: Array<Number> = []

  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
       loop: true,
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
    this.cdr.detectChanges();

    if (this.slider) {
      setInterval(() => {
        this.slider?.next();
      },3000);
    }
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

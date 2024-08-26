import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider'

@Component({
  selector: 'app-slider-number-nav',
  templateUrl: './slider-number-nav.component.html',
  styleUrl: './slider-number-nav.component.scss'
})
export class SliderNumberNavComponent {
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;

  currentSlide: number = 0
  slider!: KeenSliderInstance;
  totSlider = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      mode: "snap",
      loop: false,
      slides: {
        perView: 1,
        spacing: 15,
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
      
    })
    this.totSlider=this.slider.track.details.slides.length
    this.cdr.detectChanges();
    
  }


  // AdaptiveHeight(slider: any) {
  //   console.log(slider.container.style.height);
  //   function updateHeight() {
  //     slider.container.style.height =
  //       slider.slides[slider.track.details.rel].offsetHeight + "px"
  //   }
  //   slider.on("created", updateHeight)
  //   slider.on("slideChanged", updateHeight)
  // }

  
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}

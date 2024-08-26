import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from "keen-slider"
import { ChooseStoreLocationComponent } from '../dialogs/choose-store-location/choose-store-location.component';


function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    console.log(slider)
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      console.log(idx)
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.moveToIdx(idx)
          console.log(idx);
        })
      })
    }

    slider.on("created", () => {
      addActive(slider.track.details.rel)
      addClickEvents()
      main.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {


  @ViewChild("sliderRef") sliderRef: any = ElementRef<HTMLElement>
  @ViewChild("thumbnailRef") thumbnailRef: any = ElementRef<HTMLElement>
  currentSlide: number = 0
  slider!: KeenSliderInstance;
  thumbnailSlider!: KeenSliderInstance;
  nextDisabled = false;
  totSlider: number = 0;
  perViewSlide = 4;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef, private titleService: Title) { this.titleService.setTitle("DeliFood | Product Details"); }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        spacing: 10,
      },
    })
    this.thumbnailSlider = new KeenSlider(this.thumbnailRef.nativeElement, {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 0,
      },
      breakpoints: {
        "(max-width: 575px)": {
          slides: { perView: 3,  spacing: 0 },
        },
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
        this.updateNavigationVisibility();
      },
    }, [ThumbnailPlugin(this.slider)])
    this.totSlider = this.slider.track.details.slides.length
    this.updateNavigationVisibility();
    this.cdr.detectChanges();
  }
  updateNavigationVisibility() {
    const firstVisibleSlide = Math.floor(this.currentSlide);
    const lastVisibleSlide = Math.min(firstVisibleSlide + Math.floor(this.perViewSlide), this.totSlider - 1);
    if (lastVisibleSlide === this.totSlider - 1 && firstVisibleSlide === this.totSlider - (Math.floor(this.perViewSlide)) || lastVisibleSlide === 0) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }


  AddtoWishlist = "Add to Wishlist"
  addWishlist() {
    this.AddtoWishlist == "Add to Wishlist" ? this.AddtoWishlist = "Remove from Wishlist" : this.AddtoWishlist = "Add to Wishlist"
  }

  chooseStoreDialog() {
    const dialogRef = this.dialog.open(ChooseStoreLocationComponent, {
      panelClass: 'md-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openKeenDialog(index: number) {
    const dialogRef = this.dialog.open(modalKeenSlider, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: ['keen-gallery'],
      data: { slideIndex: index }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'modal-keen-slider',
  templateUrl: './modal-keen-slider.html',
  styleUrl: './product-details.component.scss'
})
export class modalKeenSlider {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private cdr: ChangeDetectorRef) {  }
  
  @ViewChild("sliderRef") sliderRef: any = ElementRef<HTMLElement>
  @ViewChild("thumbnailRef") thumbnailRef: any = ElementRef<HTMLElement>
  currentSlide: number = this.data.slideIndex
  slider!: KeenSliderInstance;
  thumbnailSlider!: KeenSliderInstance;
  totSlider: number = 0;


  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      slides: {
        spacing: 10,
      },
    })
    this.thumbnailSlider = new KeenSlider(this.thumbnailRef.nativeElement, {
      initial: this.currentSlide,
      slides: {
        perView: 4,
        spacing: 16,
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    }, [ThumbnailPlugin(this.slider)])
    this.totSlider = this.slider.track.details.slides.length
    this.cdr.detectChanges();
  }
  
}

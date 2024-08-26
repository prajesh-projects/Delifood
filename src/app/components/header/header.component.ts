import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { LocationDialog } from '../../pages/home/home.component';
import { MatDialog } from '@angular/material/dialog';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent {

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef, private globalVariablesService: GlobalVariablesServiceService) {}

  isLogin = this.globalVariablesService.isLogin;
  UserName = 'Kathryn Murphy';
  firstChar = this.UserName.split(' ')[0][0];
  lastChar = this.UserName.split(' ')[1][0];
  dp = false;
  active = '';

  productData = [
    { name: 'Cheeses', img: './assets/images/ic-cheese.svg', classes:'' },
    { name: 'Cold Cuts', img: './assets/images/ic-meat.svg', classes:'' },
    { name: 'Pickles', img: './assets/images/ic-pickle.svg', classes:'' },
    { name: 'Dips', img: './assets/images/ic-guacamole.svg', classes:'' },
    { name: 'Salads', img: './assets/images/ic-salad.svg', classes:'' },
    { name: 'Fish', img: './assets/images/ic-fish.svg', classes:'s' },
    { name: 'Sausages', img: './assets/images/ic-sausage.svg', classes:'' },
    { name: 'Pâtés', img: './assets/images/ic-pate.svg', classes:'s' },
    { name: 'Appetizers', img: './assets/images/ic-marinade.svg', classes:'s' },
    { name: 'Breads', img: './assets/images/ic-bread.svg', classes:'s' },
    { name: 'Condiments', img: './assets/images/ic-condiment.svg', classes:'s' },
  ];

  itemData = [
    { name: 'Paneer', img: './assets/images/panner-img.jpg', class: 'active' },
    { name: 'Cheddar Cheese', img: './assets/images/chedder-cheese.png' },
    { name: 'Mozzarella Cheese', img: './assets/images/mozzarella-cheese.png' },
    { name: 'Gouda Cheese', img: './assets/images/gouda-cheese.png' },
    { name: 'Amul Cheese', img: './assets/images/amul-cheese.png' },
    { name: 'Cottage Cheese', img: './assets/images/cottage-cheese.png' },
    { name: 'Brie Cheese', img: './assets/images/brie-cheese.png' },
    { name: 'Camembert Cheese', img: './assets/images/camembert-cheese.png' },
    { name: 'Blue Cheese', img: './assets/images/blue-cheese.png' },
    { name: 'Feta Cheese', img: './assets/images/feta-cheese.png' },
  ];

  toggleMenu(name: any) {
    event?.stopPropagation();
    this.active = name;
    document.body.classList.add('show-menu');
  }

  onClick(event: any) {
    const element = event.target;
    if (!element.classList.contains('items-list')) {
      this.active = '';
      document.body.classList.remove('show-menu');
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(LocationDialog, {
      panelClass: 'md-modal',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // slider ----------------------------------------------------
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;
  currentSlide: number = 0;
  slider!: KeenSliderInstance;
  dotHelper: Array<Number> = [];
  totSlider: number = 0;
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
    this.initializeSlider();
  }

  initializeSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'snap',
      slides: { perView: 11 },
      breakpoints: {
        '(max-width: 1249px)': {
          mode: 'free',
          slides: { perView: 'auto' },
        },
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel;
        // condition check last slide is on viewport then next button will be disabled.
        this.updateNavigationVisibility();
      },
    });
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
    if (this.slider) this.slider.destroy();
  }


  searchDisplay = false
  showSearch() {
    this.searchDisplay = !this.searchDisplay
  }
  
}

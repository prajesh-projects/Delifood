import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { FilterProductListComponent } from '../dialogs/filter-product-list/filter-product-list.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss'
})



export class ShopDetailsComponent {

  constructor(private titleService: Title, private cdr: ChangeDetectorRef, public dialog: MatDialog) {
    this.titleService.setTitle("DeliFood | Shop Details");
  }

  menuLink = [
    {name:'Paneer', totItem:'11', active:true},
    {name:'Cheddar Cheese', totItem:'6', active:false},
    {name:'Mozzarella Cheese', totItem:'5', active:false},
    {name:'Gouda Cheese', totItem:'1', active:false},
    {name:'Amul Cheese', totItem:'4', active:false},
    {name:'Cottage Cheese', totItem:'4', active:false},
    {name:'Brie Cheese', totItem:'1', active:false},
    {name:'Camembert Cheese', totItem:'1', active:false},
    {name:'Blue Cheese', totItem:'1', active:false},
    {name:'Feta Cheese', totItem:'1', active:false},
  ]

  openDialog() {
    const dialogRef = this.dialog.open(FilterProductListComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 

  ProductData = [
    {name:'Regular Paneer', bestseller:true, img:'./assets/images/rectangle-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:true},
    {name:'Malai Paneer', img:'./assets/images/rectangle-malai-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Smoked Paneer', img:'./assets/images/rectangle-smoked-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Herbed Paneer', img:'./assets/images/rectangle-herbed-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Marinated Paneer', img:'./assets/images/rectangle-marinated-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Tofu Paneer', img:'./assets/images/rectangle-tofu-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Paneer Cubes', bestseller:true, img:'./assets/images/rectangle-paneer-cubes.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Paneer Blocks', img:'./assets/images/rectangle-paneer-blocks-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Paneer Shreds', img:'./assets/images/rectangle-paneer-shreds-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
    {name:'Paneer Crumbles', img:'./assets/images/rectangle-paneer-crumbles-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00', pickSchedule:false},
  ]
  
  listView = false;
  onListview(ob: MatButtonToggleChange){
    // console.log("PQR checked: " + ob.value);
    this.listView = !this.listView;
  }

  // slider ----------------------------------------------------
  active = '';
  productData = [
    { name: 'Cheeses', classes:'', img: './assets/images/ic-cheese.svg' },
    { name: 'Cold Cuts', classes:'', img: './assets/images/ic-meat.svg' },
    { name: 'Pickles', classes:'', img: './assets/images/ic-pickle.svg' },
    { name: 'Dips', classes:'', img: './assets/images/ic-guacamole.svg' },
    { name: 'Salads', classes:'', img: './assets/images/ic-salad.svg' },
    { name: 'Fish', classes:'s', img: './assets/images/ic-fish.svg' },
    { name: 'Sausages', classes:'', img: './assets/images/ic-sausage.svg' },
    { name: 'Pâtés', classes:'s', img: './assets/images/ic-pate.svg' },
    { name: 'Appetizers', classes:'s', img: './assets/images/ic-marinade.svg' },
    { name: 'Breads', classes:'s', img: './assets/images/ic-bread.svg' },
    { name: 'Condiments', classes:'s', img: './assets/images/ic-condiment.svg' },
  ];

  toggleMenu(name: any) {
    event?.stopPropagation();
    this.active = name;
  }
  @ViewChild('sliderRef') sliderRef: any = ElementRef<HTMLElement>;
  currentSlide: number = 0;
  slider!: KeenSliderInstance;
  nextDisabled = true;

  ngAfterViewInit() {
      this.initializeSlider();
  }

  onTabChanged() {
    setTimeout(() => {
    this.initializeSlider();
  }, 250);
  }

  initializeSlider() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: { perView: 'auto', spacing: 16 },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel;
        if (this.currentSlide === s.track.details.maxIdx) {
          this.nextDisabled = true;
        } else {
          this.nextDisabled = false;
        }
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
    if (this.slider) this.slider.destroy()
  }

}

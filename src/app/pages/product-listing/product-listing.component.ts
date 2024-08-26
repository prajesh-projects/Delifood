import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { FilterProductListComponent } from '../dialogs/filter-product-list/filter-product-list.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent {

  listView = false;

  constructor(public dialog: MatDialog, private titleService: Title) { this.titleService.setTitle("DeliFood | Product Listing");}


  ProductData = [
    {name:'Regular Paneer', bestseller:true, img:'./assets/images/rectangle-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Malai Paneer', img:'./assets/images/rectangle-malai-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Smoked Paneer', img:'./assets/images/rectangle-smoked-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Herbed Paneer', img:'./assets/images/rectangle-herbed-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Marinated Paneer', img:'./assets/images/rectangle-marinated-paneer-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Tofu Paneer', img:'./assets/images/rectangle-tofu-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Paneer Cubes', bestseller:true, img:'./assets/images/rectangle-paneer-cubes.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Paneer Blocks', img:'./assets/images/rectangle-paneer-blocks-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Paneer Shreds', img:'./assets/images/rectangle-paneer-shreds-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Paneer Crumbles', img:'./assets/images/rectangle-paneer-crumbles-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
  ]

  onListview(ob: MatButtonToggleChange){
    // console.log("PQR checked: " + ob.value);
    this.listView = !this.listView;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterProductListComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
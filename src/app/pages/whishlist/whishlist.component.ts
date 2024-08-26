import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { FilterProductListComponent } from '../dialogs/filter-product-list/filter-product-list.component';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.scss'
})
export class WhishlistComponent {

  ProductData = [
    {name:'Regular Paneer', bestseller:true, img:'./assets/images/rectangle-panner-img.png', rating: '4.0', review:'1256', shop: 'Flavorsome Delights', price:'₹300.00'},
    {name:'Classic Roast Beef', img:'./assets/images/rectangle-classic-roast-beef.png', rating: '4.5', review:'1256', shop: 'The Deli Hub', price:'₹300.00'},
    {name:'Smoked Gouda Cheese', img:'./assets/images/rectangle-smoked-gouda-cheese.png', rating: '4.5', review:'1256', shop: 'Cheesy Delights', price:'₹300.00'},
    {name:'Pastrami Sandwich', bestseller:true, img:'./assets/images/rectangle-pastrami-sandwich.png', rating: '4.0', review:'1256', shop: 'Deliicious Bites', price:'₹300.00'},
    {name:'Greek Salad', img:'./assets/images/rectangle-greek-salad.png', rating: '4.5', review:'1256', shop: 'Fresh Greens Deli', price:'₹300.00'},
    {name:'Sourdough Baguette', img:'./assets/images/rectangle-sourdough-baguette.png', rating: '4.5', review:'1256', shop: "Artisan Baker's Corner", price:'₹300.00'},
    {name:'Assorted Pickles', img:'./assets/images/rectangle-assorted-pickles.png', rating: '4.5', review:'1256', shop: 'Pickle Paradise', price:'₹300.00'},
    {name:'Smoked Salmon Platter', img:'./assets/images/signature-smoked-salmon.png', rating: '4.5', review:'1256', shop: 'Seafood Delights', price:'350.00'},
    {name:'Honey Mustard Ham', img:'./assets/images/rectangle-honey-mustard-ham.png', rating: '4.5', review:'1256', shop: 'Ham Heaven', price:'350.00'},
    {name:'Mediterranean Hummus', img:'./assets/images/rectangle-mediterranean-hummus.png', rating: '4.5', review:'1256', shop: 'Hummus House', price:'350.00'},
  ]

  listView = false;
  onListview(ob: MatButtonToggleChange){
    this.listView = !this.listView;
  }

  constructor(public dialog: MatDialog, private titleService: Title) { this.titleService.setTitle("DeliFood | Whishlist");}
  openDialog() {
    const dialogRef = this.dialog.open(FilterProductListComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

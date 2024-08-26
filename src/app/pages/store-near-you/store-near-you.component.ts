import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { FilterStoreListComponent } from '../dialogs/filter-store-list/filter-store-list.component';

@Component({
  selector: 'app-store-near-you',
  templateUrl: './store-near-you.component.html',
  styleUrl: './store-near-you.component.scss'
})
export class StoreNearYouComponent {
  listView = false;

  constructor(public dialog: MatDialog, private titleService: Title) { this.titleService.setTitle("DeliFood | Product Listing");}


  // 456, Indiranagar 100 Feet Road, Bengaluru, Karnataka 

  ProductData = [
    {name:'Flavorsome Delights', bestseller:true, img:'./assets/images/smoked-gouda-cheese-img.jpg', rating: '4.0', location: '123, Brigade Road,  Bengaluru, Karnataka ',},
    {name:'Flavor Junction Deli', img:'./assets/images/flavor-junction-deli.jpg', rating: '4.0', location: '45, Church Street, Mysuru, Karnataka',},
    {name:'Savory Delights Deli', img:'./assets/images/savory-delights-deli.jpg', rating: '4.0', location: '678, MG Road, Mangaluru, Karnataka',},
    {name:'Tasty Treats Deli', img:'./assets/images/tasty-treats-deli.jpg', rating: '4.0', location: '56, Residency Road, Hubballi, Karnataka',},
    {name:'Gourmet Oasis Deli', img:'./assets/images/gurmet-oasis-deli.jpg', rating: '4.0', location: '78, Richmond Road, Belagavi, Karnataka',},
    {name:'Yummy Corner Deli', img:'./assets/images/yummy-corner-deli.jpg', rating: '4.0', location: '98, Kuvempu Nagar, Ballari, Karnataka',},
    {name:'Spice Fusion Deli', bestseller:true, img:'./assets/images/spice-fusion-deli.jpg', rating: '4.0', location: '234, Jayanagar, Bengaluru, Karnataka',},
    {name:'Heavenly Flavors Deli', img:'./assets/images/heavenly-flavors-deli.jpg', rating: '4.0', location: '32, Gandhi Bazar, Bengaluru, Karnataka',},
    {name:'Foodie Haven Deli', img:'./assets/images/foodie-heaven-deli.jpg', rating: '4.0', location: '87, Brigade Millennium Road, Bengaluru, Karnataka',},
    {name:'Taste Treasure Deli', img:'./assets/images/taste-treasure-deli.jpg', rating: '4.0', location: '789, Commercial Street, Bengaluru, Karnataka',},
  ]

  onListview(ob: MatButtonToggleChange){
    // console.log("PQR checked: " + ob.value);
    this.listView = !this.listView;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterStoreListComponent,{
      panelClass: 'mdl-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  foodEx = true
  deliveryEx = false
  shopEx = false
  revieList = false

  nextDeliveryEx() {
    this.foodEx = false
    this.deliveryEx=true
    this.shopEx = false

  }
  nextFoodEx(){
    this.foodEx = true
    this.deliveryEx=false
    this.shopEx = false

  }
  nextShopEx(){ 
    this.shopEx = true
    this.deliveryEx=false
    this.foodEx = false
    this.revieList = false
  }
  nextRevieList(){
    this.shopEx = false
    this.deliveryEx=false
    this.foodEx = false
    this.revieList = true
  }
  editReview() {
    this.shopEx = false
    this.deliveryEx=false
    this.foodEx = true
    this.revieList = false
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { StoreNearYouComponent } from './pages/store-near-you/store-near-you.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderComponent } from './pages/order/order.component';
import { WhishlistComponent } from './pages/whishlist/whishlist.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { PersonalizedPageComponent } from './pages/personalized-page/personalized-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'otp', component: OtpPageComponent },
  { path: 'personalized', component: PersonalizedPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'shop-details', component: ShopDetailsComponent },
  { path: 'stores', component: StoreNearYouComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-tracker', component: OrderTrackingComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'wishlist',
        component: WhishlistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

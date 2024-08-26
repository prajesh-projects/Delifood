import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { MaterialModule } from './shared/material/material.module';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ResendTimerComponent } from './components/resend-timer/resend-timer.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CheckboxChipComponent } from './components/checkbox-chip/checkbox-chip.component';
import { HomeComponent, LocationDialog } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconSelectComponent } from './components/icon-select/icon-select.component';
import { AddressSliderComponent } from './components/address-slider/address-slider.component';
import {
  ProductListingComponent,
} from './pages/product-listing/product-listing.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { GlobalVariablesServiceService } from './shared/global-variables-service.service';
import { RageSliderComponent } from './components/rage-slider/rage-slider.component';
import { ProductDetailsComponent, modalKeenSlider } from './pages/product-details/product-details.component';
import { CounterBtnWrapperComponent } from './components/counter-btn-wrapper/counter-btn-wrapper.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingProgressbarComponent } from './components/rating-progressbar/rating-progressbar.component';
import { ReviewBlockComponent } from './components/review-block/review-block.component';
import { AddedToCartDialogComponent } from './pages/dialogs/added-to-cart-dialog/added-to-cart-dialog.component';
import { ChooseStoreLocationComponent } from './pages/dialogs/choose-store-location/choose-store-location.component';
import { PickupScheduleDialogComponent } from './pages/dialogs/pickup-schedule-dialog/pickup-schedule-dialog.component';
import { AddressBlockComponent } from './components/address-block/address-block.component';
import { PickupScheduleSuccessDialogComponent } from './pages/dialogs/pickup-schedule-success-dialog/pickup-schedule-success-dialog.component';
import { PickupDetailsDailogComponent } from './pages/dialogs/pickup-details-dailog/pickup-details-dailog.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreNearYouComponent } from './pages/store-near-you/store-near-you.component';
import { FilterProductListComponent } from './pages/dialogs/filter-product-list/filter-product-list.component';
import { FilterStoreListComponent } from './pages/dialogs/filter-store-list/filter-store-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CouponsDialogComponent } from './pages/dialogs/coupons-dialog/coupons-dialog.component';
import { CouponAppliedComponent } from './pages/dialogs/coupon-applied/coupon-applied.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { KeensliderBlockComponent } from './components/keenslider-block/keenslider-block.component';
import { SliderNumberNavComponent } from './components/slider-number-nav/slider-number-nav.component';
import { UpiDialogComponent } from './pages/dialogs/upi-dialog/upi-dialog.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderComponent } from './pages/order/order.component';
import { WhishlistComponent } from './pages/whishlist/whishlist.component';
import { CancelOrderComponent } from './pages/dialogs/cancel-order/cancel-order.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderPlacedDialogComponent } from './pages/dialogs/order-placed-dialog/order-placed-dialog.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { PersonalizedPageComponent } from './pages/personalized-page/personalized-page.component';
import { FilterOrderListComponent } from './pages/dialogs/filter-order-list/filter-order-list.component';
import { CancelSuccessDialogComponent } from './pages/dialogs/cancel-success-dialog/cancel-success-dialog.component';
import { StoreNotFoundComponent } from './pages/dialogs/store-not-found/store-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImgSliderComponent,
    TextFieldComponent,
    ResendTimerComponent,
    CheckboxChipComponent,
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    IconSelectComponent,
    AddressSliderComponent,
    LocationDialog,
    ProductListingComponent,
    RageSliderComponent,
    ProductDetailsComponent,
    CounterBtnWrapperComponent,
    RatingComponent,
    RatingProgressbarComponent,
    ReviewBlockComponent,
    AddedToCartDialogComponent,
    ChooseStoreLocationComponent,
    PickupScheduleDialogComponent,
    AddressBlockComponent,
    PickupScheduleSuccessDialogComponent,
    PickupDetailsDailogComponent,
    ItemBoxComponent,
    modalKeenSlider,
    ShopDetailsComponent,
    StoreNearYouComponent,
    FilterProductListComponent,
    FilterStoreListComponent,
    CartComponent,
    CouponsDialogComponent,
    CouponAppliedComponent,
    CheckoutComponent,
    KeensliderBlockComponent,
    SliderNumberNavComponent,
    UpiDialogComponent,
    MyAccountComponent,
    ProfileComponent,
    OrderComponent,
    WhishlistComponent,
    CancelOrderComponent,
    OrderTrackingComponent,
    OrderDetailsComponent,
    OrderPlacedDialogComponent,
    OtpPageComponent,
    PersonalizedPageComponent,
    FilterOrderListComponent,
    CancelSuccessDialogComponent,
    StoreNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoundProgressModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [AddressSliderComponent],
  providers: [GlobalVariablesServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAppliedComponent } from './coupon-applied.component';

describe('CouponAppliedComponent', () => {
  let component: CouponAppliedComponent;
  let fixture: ComponentFixture<CouponAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponAppliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

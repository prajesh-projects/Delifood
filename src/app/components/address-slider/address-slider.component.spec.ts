import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSliderComponent } from './address-slider.component';

describe('AddressSliderComponent', () => {
  let component: AddressSliderComponent;
  let fixture: ComponentFixture<AddressSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

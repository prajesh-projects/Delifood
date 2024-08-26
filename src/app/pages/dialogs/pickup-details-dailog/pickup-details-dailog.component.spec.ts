import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDetailsDailogComponent } from './pickup-details-dailog.component';

describe('PickupDetailsDailogComponent', () => {
  let component: PickupDetailsDailogComponent;
  let fixture: ComponentFixture<PickupDetailsDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupDetailsDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupDetailsDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

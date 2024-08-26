import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupScheduleSuccessDialogComponent } from './pickup-schedule-success-dialog.component';

describe('PickupScheduleSuccessDialogComponent', () => {
  let component: PickupScheduleSuccessDialogComponent;
  let fixture: ComponentFixture<PickupScheduleSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupScheduleSuccessDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupScheduleSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

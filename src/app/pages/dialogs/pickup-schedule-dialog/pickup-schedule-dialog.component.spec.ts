import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupScheduleDialogComponent } from './pickup-schedule-dialog.component';

describe('PickupScheduleDialogComponent', () => {
  let component: PickupScheduleDialogComponent;
  let fixture: ComponentFixture<PickupScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupScheduleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSuccessDialogComponent } from './cancel-success-dialog.component';

describe('CancelSuccessDialogComponent', () => {
  let component: CancelSuccessDialogComponent;
  let fixture: ComponentFixture<CancelSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelSuccessDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

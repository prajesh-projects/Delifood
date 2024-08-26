import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendTimerComponent } from './resend-timer.component';

describe('ResendTimerComponent', () => {
  let component: ResendTimerComponent;
  let fixture: ComponentFixture<ResendTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResendTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResendTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBtnWrapperComponent } from './counter-btn-wrapper.component';

describe('CounterBtnWrapperComponent', () => {
  let component: CounterBtnWrapperComponent;
  let fixture: ComponentFixture<CounterBtnWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterBtnWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterBtnWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

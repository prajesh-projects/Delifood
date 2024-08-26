import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNumberNavComponent } from './slider-number-nav.component';

describe('SliderNumberNavComponent', () => {
  let component: SliderNumberNavComponent;
  let fixture: ComponentFixture<SliderNumberNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderNumberNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderNumberNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

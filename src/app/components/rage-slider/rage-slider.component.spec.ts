import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RageSliderComponent } from './RageSliderComponent';

describe('RageSliderComponent', () => {
  let component: RageSliderComponent;
  let fixture: ComponentFixture<RageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RageSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingProgressbarComponent } from './rating-progressbar.component';

describe('RatingProgressbarComponent', () => {
  let component: RatingProgressbarComponent;
  let fixture: ComponentFixture<RatingProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingProgressbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

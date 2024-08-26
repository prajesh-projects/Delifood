import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNearYouComponent } from './store-near-you.component';

describe('StoreNearYouComponent', () => {
  let component: StoreNearYouComponent;
  let fixture: ComponentFixture<StoreNearYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreNearYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

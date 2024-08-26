import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOrderListComponent } from './filter-order-list.component';

describe('FilterOrderListComponent', () => {
  let component: FilterOrderListComponent;
  let fixture: ComponentFixture<FilterOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

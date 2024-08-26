import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStoreListComponent } from './filter-store-list.component';

describe('FilterStoreListComponent', () => {
  let component: FilterStoreListComponent;
  let fixture: ComponentFixture<FilterStoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterStoreListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

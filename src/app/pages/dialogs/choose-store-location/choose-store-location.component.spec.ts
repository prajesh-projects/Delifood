import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStoreLocationComponent } from './choose-store-location.component';

describe('ChooseStoreLocationComponent', () => {
  let component: ChooseStoreLocationComponent;
  let fixture: ComponentFixture<ChooseStoreLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseStoreLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseStoreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

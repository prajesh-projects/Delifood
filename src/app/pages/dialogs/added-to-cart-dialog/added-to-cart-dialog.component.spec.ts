import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToCartDialogComponent } from './added-to-cart-dialog.component';

describe('AddedToCartDialogComponent', () => {
  let component: AddedToCartDialogComponent;
  let fixture: ComponentFixture<AddedToCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddedToCartDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedToCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

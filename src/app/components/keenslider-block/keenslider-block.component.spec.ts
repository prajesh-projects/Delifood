import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeensliderBlockComponent } from './keenslider-block.component';

describe('KeensliderBlockComponent', () => {
  let component: KeensliderBlockComponent;
  let fixture: ComponentFixture<KeensliderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeensliderBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeensliderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

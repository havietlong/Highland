import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductsPageComponent } from './product-carousel.component';

describe('DisplayProductsPageComponent', () => {
  let component: DisplayProductsPageComponent;
  let fixture: ComponentFixture<DisplayProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayProductsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

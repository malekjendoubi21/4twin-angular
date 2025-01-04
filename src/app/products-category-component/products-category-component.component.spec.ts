import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryComponentComponent } from './products-category-component.component';

describe('ProductsCategoryComponentComponent', () => {
  let component: ProductsCategoryComponentComponent;
  let fixture: ComponentFixture<ProductsCategoryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategoryComponentComponent]
    });
    fixture = TestBed.createComponent(ProductsCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductComponentComponent } from './form-product-component.component';

describe('FormProductComponentComponent', () => {
  let component: FormProductComponentComponent;
  let fixture: ComponentFixture<FormProductComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductComponentComponent]
    });
    fixture = TestBed.createComponent(FormProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

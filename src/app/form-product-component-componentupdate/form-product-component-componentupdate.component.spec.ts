import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductComponentComponentupdateComponent } from './form-product-component-componentupdate.component';

describe('FormProductComponentComponentupdateComponent', () => {
  let component: FormProductComponentComponentupdateComponent;
  let fixture: ComponentFixture<FormProductComponentComponentupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductComponentComponentupdateComponent]
    });
    fixture = TestBed.createComponent(FormProductComponentComponentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

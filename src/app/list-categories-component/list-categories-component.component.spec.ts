import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesComponentComponent } from './list-categories-component.component';

describe('ListCategoriesComponentComponent', () => {
  let component: ListCategoriesComponentComponent;
  let fixture: ComponentFixture<ListCategoriesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCategoriesComponentComponent]
    });
    fixture = TestBed.createComponent(ListCategoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

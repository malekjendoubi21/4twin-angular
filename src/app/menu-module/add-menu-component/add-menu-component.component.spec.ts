import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuComponentComponent } from './add-menu-component.component';

describe('AddMenuComponentComponent', () => {
  let component: AddMenuComponentComponent;
  let fixture: ComponentFixture<AddMenuComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMenuComponentComponent]
    });
    fixture = TestBed.createComponent(AddMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

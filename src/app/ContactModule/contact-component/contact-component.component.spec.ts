import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentComponent } from './contact-component.component';

describe('ContactComponentComponent', () => {
  let component: ContactComponentComponent;
  let fixture: ComponentFixture<ContactComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponentComponent]
    });
    fixture = TestBed.createComponent(ContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPationComponent } from './add-pation.component';

describe('AddPationComponent', () => {
  let component: AddPationComponent;
  let fixture: ComponentFixture<AddPationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPationComponent]
    });
    fixture = TestBed.createComponent(AddPationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCliniqueComponent } from './add-clinique.component';

describe('AddCliniqueComponent', () => {
  let component: AddCliniqueComponent;
  let fixture: ComponentFixture<AddCliniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCliniqueComponent]
    });
    fixture = TestBed.createComponent(AddCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

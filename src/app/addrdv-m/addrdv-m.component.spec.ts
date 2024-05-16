import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrdvMComponent } from './addrdv-m.component';

describe('AddrdvMComponent', () => {
  let component: AddrdvMComponent;
  let fixture: ComponentFixture<AddrdvMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrdvMComponent]
    });
    fixture = TestBed.createComponent(AddrdvMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

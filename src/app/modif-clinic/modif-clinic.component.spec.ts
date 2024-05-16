import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifClinicComponent } from './modif-clinic.component';

describe('ModifClinicComponent', () => {
  let component: ModifClinicComponent;
  let fixture: ComponentFixture<ModifClinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifClinicComponent]
    });
    fixture = TestBed.createComponent(ModifClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecienComponent } from './medecien.component';

describe('MedecienComponent', () => {
  let component: MedecienComponent;
  let fixture: ComponentFixture<MedecienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecienComponent]
    });
    fixture = TestBed.createComponent(MedecienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

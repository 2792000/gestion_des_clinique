import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniquehomeComponent } from './cliniquehome.component';

describe('CliniquehomeComponent', () => {
  let component: CliniquehomeComponent;
  let fixture: ComponentFixture<CliniquehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliniquehomeComponent]
    });
    fixture = TestBed.createComponent(CliniquehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

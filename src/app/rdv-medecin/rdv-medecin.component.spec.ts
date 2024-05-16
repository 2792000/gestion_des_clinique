import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvMedecinComponent } from './rdv-medecin.component';

describe('RdvMedecinComponent', () => {
  let component: RdvMedecinComponent;
  let fixture: ComponentFixture<RdvMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvMedecinComponent]
    });
    fixture = TestBed.createComponent(RdvMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

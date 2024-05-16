import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMedecinComponent } from './modif-medecin.component';

describe('ModifMedecinComponent', () => {
  let component: ModifMedecinComponent;
  let fixture: ComponentFixture<ModifMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifMedecinComponent]
    });
    fixture = TestBed.createComponent(ModifMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMedecinComponent } from './home-medecin.component';

describe('HomeMedecinComponent', () => {
  let component: HomeMedecinComponent;
  let fixture: ComponentFixture<HomeMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMedecinComponent]
    });
    fixture = TestBed.createComponent(HomeMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

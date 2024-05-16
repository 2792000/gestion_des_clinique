import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRdvComponent } from './modif-rdv.component';

describe('ModifRdvComponent', () => {
  let component: ModifRdvComponent;
  let fixture: ComponentFixture<ModifRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifRdvComponent]
    });
    fixture = TestBed.createComponent(ModifRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

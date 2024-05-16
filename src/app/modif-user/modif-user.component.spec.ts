import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifUserComponent } from './modif-user.component';

describe('ModifUserComponent', () => {
  let component: ModifUserComponent;
  let fixture: ComponentFixture<ModifUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifUserComponent]
    });
    fixture = TestBed.createComponent(ModifUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPationComponent } from './list-pation.component';

describe('ListPationComponent', () => {
  let component: ListPationComponent;
  let fixture: ComponentFixture<ListPationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPationComponent]
    });
    fixture = TestBed.createComponent(ListPationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

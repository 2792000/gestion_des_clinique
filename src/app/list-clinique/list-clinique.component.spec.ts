import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCliniqueComponent } from './list-clinique.component';

describe('ListCliniqueComponent', () => {
  let component: ListCliniqueComponent;
  let fixture: ComponentFixture<ListCliniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCliniqueComponent]
    });
    fixture = TestBed.createComponent(ListCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCliniqueComponent } from './detail-clinique.component';

describe('DetailCliniqueComponent', () => {
  let component: DetailCliniqueComponent;
  let fixture: ComponentFixture<DetailCliniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCliniqueComponent]
    });
    fixture = TestBed.createComponent(DetailCliniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

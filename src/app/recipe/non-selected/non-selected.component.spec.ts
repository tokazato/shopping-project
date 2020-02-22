import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSelectedComponent } from './non-selected.component';

describe('NonSelectedComponent', () => {
  let component: NonSelectedComponent;
  let fixture: ComponentFixture<NonSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

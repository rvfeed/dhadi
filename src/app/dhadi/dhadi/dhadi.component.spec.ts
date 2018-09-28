import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhadiComponent } from './dhadi.component';

describe('DhadiComponent', () => {
  let component: DhadiComponent;
  let fixture: ComponentFixture<DhadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

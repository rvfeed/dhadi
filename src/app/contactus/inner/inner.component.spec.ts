import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerComponent } from './inner.component';
import { ContactusComponent } from '../contactus.component';

describe('InnerComponent', () => {
  let component: InnerComponent;
  let fixture: ComponentFixture<InnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerComponent, ContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
 //   component.incoming = ["Raja"]
   // expect(component).toBeTruthy();
  });
});

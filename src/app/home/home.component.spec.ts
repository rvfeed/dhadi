import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing'
import { By } from "@angular/platform-browser"
import { Location } from '@angular/common'
import { HomeComponent } from './home.component';
import {Router, ActivatedRoute} from '@angular/router'
import { HeaderComponent } from '../header/header.component';

import { ContactusComponent } from '../contactus/contactus.component';
import { routes } from '../app.module';
import { Sadhinchu } from '../lib/resolve/sadhinchu';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { InnerComponent } from '../contactus/inner/inner.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HomeComponent, ContactusComponent, AboutusComponent, InnerComponent ],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [Sadhinchu]  
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);    
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("track incr", async() => {
    component.showInc();
   // expect(component.showIncr).toBeGreaterThanOrEqual(0)
  })
  it("track incr by click", fakeAsync(() => {
   fixture.debugElement.query(By.css(".bincr")).triggerEventHandler("click", null)
   tick(50)
//    expect(component.showIncr).toBeGreaterThanOrEqual(1)
  }))
  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));
  it("router test", fakeAsync(() => {
  
    router.navigate(['home'])
    tick(50);
 //   console.log("data", routeState.snapshot)
  expect(location.path()).toBe("/home")
  }))

});

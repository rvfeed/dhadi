import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {routes} from '../app.module'
import {Router, ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'
import { RouterTestingModule} from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { Sadhinchu} from '../lib/resolve/sadhinchu'
import {By} from "@angular/platform-browser";
import { InnerComponent } from '../contactus/inner/inner.component';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;
let routeState : ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, InnerComponent, HomeComponent,AboutusComponent, ContactusComponent ],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [Sadhinchu]    
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    routeState = TestBed.get(ActivatedRoute)
    router.initialNavigation();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    let m = fixture.debugElement.query(By.css("a"))
    expect(m.nativeElement.innerText).toBe("Home")
    expect(component).toBeTruthy();
  });
  it("router test", fakeAsync(() => {
  
    router.navigate(['home'])
    tick(50);
 //   console.log("data", routeState.snapshot)
  expect(location.path()).toBe("/home")
  }))
});

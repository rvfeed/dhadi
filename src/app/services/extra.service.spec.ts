import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ExtraService } from './extra.service';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


describe('ExtraService', () => {  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraService],
      imports: [HttpClientTestingModule],
      
    });
  });

  it('should be created', inject([ExtraService, HttpTestingController], (service: ExtraService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
    service.giveNext(4);
    service.behave$.subscribe(console.log)
  }));
  it('obsever has been called',  inject([ExtraService, HttpTestingController], (service: ExtraService, httpMock: HttpTestingController) => {
    spyOn(service, 'giveNext').and.callThrough()
    service.giveNext(8)
    expect(service.giveNext).toHaveBeenCalled();
  service.behave$.subscribe((c) => {
      expect(c).toEqual(8)
    });
    
    service.getData().subscribe((d)=>{
      console.log("ddddddddd", d)
    })
    let m = httpMock.expectOne("http://localhost:9090/test.json");
    m.flush([{"name": "raja"}])
    httpMock.verify();
  }));

  it("test http call", inject([ExtraService, HttpTestingController], (service: ExtraService, httpMock: HttpTestingController) => {
    service.getData().subscribe((data) =>{
      expect(data.length).toEqual(1)
    });
    let m = httpMock.expectOne("http://localhost:9090/test.json");
    m.flush([{"name": "raja"}])
    httpMock.verify();

  }));
});

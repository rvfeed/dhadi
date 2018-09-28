import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class ExtraService {
  public behave = new BehaviorSubject<number>(0);
  public behave$ : Observable<number> = this.behave.asObservable();;
 
  constructor(@Inject(HttpClient) private http: HttpClient) {
    
  }
  giveNext(n: number){
     this.behave.next(n)
  }
  getData(): Observable<any>{
    return this.http.get<any>("http://localhost:9090/test.json");
  }
  
}

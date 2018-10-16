import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DhadiDirective } from '../directives/dhadi.directive';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/operator/map'
import { HttpClient } from '@angular/common/http';
type dyePostions = {
  x: number;
  y: number;
}

@Injectable()
export class DhadiService {
  public dye = new BehaviorSubject<DhadiDirective>(null);  
  private drag = new BehaviorSubject<number>(0);  
  private dragPrev = new BehaviorSubject<boolean>(false);
  public dhadiIndices = []
  dragPrev$ = this.dragPrev.asObservable(); 
  public currentDye = 0;
  public previousDye = 0;
  public dragPrevDye = 0;
  public activeDyes: number[] = [];
public drag$ = this.drag.asObservable()
constructor(private http: HttpClient) {
  //this.getDhadiIndices();
 }
  getDye(d: DhadiDirective): void{
     this.dye.next(d)
  }
  dragDye(flag: number){
      this.drag.next(flag);
  }
  dragPrevDyeO(d){
    this.dragPrev.next(d);
  }
  getDhadiIndices(){
    this.http.get("http://localhost:3001/dhadiIndices")
              .subscribe((indices: any) => {
                this.dhadiIndices = indices.dhadiIndices;
              })
  }
}

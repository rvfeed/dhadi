import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DhadiDirective } from '../directives/dhadi.directive';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/operator/map'
type dyePostions = {
  x: number;
  y: number;
}

@Injectable()
export class DhadiService {
  public dye = new BehaviorSubject<DhadiDirective>(null);  
  private drag = new BehaviorSubject<boolean>(false);  
  private dragPrev = new BehaviorSubject<boolean>(false); 
  dragPrev$ = this.dragPrev.asObservable(); 
  public currentDye = 0;
  public previousDye = 0;
  public dragPrevDye = 0;
  socketConnect : Subject<any>;
public drag$ = this.drag.asObservable()
constructor(private socketSer: SocketService) {
  this.socketConnect = <Subject<any>>this.socketSer.connect().map(a => a);
 }
  getDye(d: DhadiDirective): void{
     this.dye.next(d)
  }
  dragDye(flag: boolean){
      this.drag.next(flag);
  }
  dragPrevDyeO(d){
    this.dragPrev.next(d);
  }
  sendMsg(msg: string){
    this.socketConnect.next(msg);
  }
}

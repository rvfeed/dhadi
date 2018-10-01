import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DhadiDirective } from '../directives/dhadi.directive';
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
public drag$ = this.drag.asObservable()
  constructor() { }
  getDye(d: DhadiDirective): void{
     this.dye.next(d)
  }
  dragDye(flag: boolean){
      this.drag.next(flag);
  }
  dragPrevDyeO(d){
    this.dragPrev.next(d);
  }
}

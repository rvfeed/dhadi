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
  constructor() { }
  getDye(d: DhadiDirective): void{
     this.dye.next(d)
  }
}

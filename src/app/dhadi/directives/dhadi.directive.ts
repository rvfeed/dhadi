import { Directive, HostBinding, HostListener, ElementRef, ViewChild, Renderer, ViewContainerRef } from '@angular/core';
import { DhadiService } from '../services/dhadi.service';

@Directive({
  selector: '[appDhadi]'
})
export class DhadiDirective {
@HostBinding('class.dyeMain') isActive = false;

  constructor( private el: ElementRef, 
    private render: Renderer, 
    private dyeSer: DhadiService,
    public viewCont: ViewContainerRef) { }
@HostListener('click', ['$event'])
settleDye(e){
 this.isActive = true;
 console.log(this.el.nativeElement.className)
 //this.render.setElementClass(this.el.nativeElement, 'dyeMain', true)
 this.dyeSer.getDye(this);  
}
}

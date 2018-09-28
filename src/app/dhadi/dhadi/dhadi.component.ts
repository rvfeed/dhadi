import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer, AfterViewInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { DhadiService } from '../services/dhadi.service';
import { DhadiDirective } from '../directives/dhadi.directive';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-dhadi',
  templateUrl: './dhadi.component.html',
  styleUrls: ['./dhadi.component.scss']
})
export class DhadiComponent implements OnInit, AfterViewInit {
  corners: Array<number> = [1,2,3,4,5,6,7,8,9]; 
@ViewChild("dye") dye : TemplateRef<DhadiDirective>;
@ViewChildren(DhadiDirective)  dhadiDire : QueryList<DhadiDirective>;
isActive: boolean = false;
  constructor( private el: ElementRef, private render: Renderer, private dhadiSer: DhadiService) { }

  ngOnInit() {
  
  } 
 // @HostListener('click', ['$event'])
  settleDye(pos){
//    console.log(e.clientX, e.clientY);
console.log(this.dye)
   // this.render.setElementStyle(this.dye.nativeElement, 'style', `left:${pos.x}; top: ${pos.y}`)
  }
  
ngAfterViewInit(){
this.clickOnDhadi()

}
//@HostListener('click', ['$event'])
clickOnDhadi(){
  console.log(this.dhadiDire)
  
  this.dhadiSer.dye.subscribe(pos =>{
    if(!pos) return false;
    console.log(pos); 
    let m = this.dhadiDire.map(a => {
      if(pos == a){
       
        a.isActive = true;

      }else{
        a.isActive = false;

      }
    }); 
  //  console.log(m.createEmbededView)
  
    /* let part = this.el.nativeElement.querySelector('#dyeMain');
    this.render.setElementStyle(part, 'left', `${pos.x}px`);
    this.render.setElementStyle(part, 'top', `${pos.y}px`);  */
  });
}

}

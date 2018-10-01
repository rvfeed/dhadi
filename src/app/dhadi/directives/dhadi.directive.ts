import { Directive, HostBinding, HostListener, ElementRef, ViewChild, Renderer, ViewContainerRef, Input } from '@angular/core';
import { DhadiService } from '../services/dhadi.service';
import 'rxjs/add/operator/debounceTime'
import { UserService } from '../services/user.service';

@Directive({
  selector: '[appDhadi]'
})
export class DhadiDirective {
@HostBinding('class.user1') user1Active = false;
@HostBinding('class.user2') user2Active = false;
currentUser: number = 1;
active = false;
@Input("appDhadi") currentDye: number; 
  constructor( private el: ElementRef, 
    private render: Renderer, 
    private dyeSer: DhadiService,
    public viewCont: ViewContainerRef,
    private userSer: UserService) {

     }

ngOnInit(){
  console.log(this.currentUser)
 // this.dyeSer.socketConnect.subscribe(console.log)
}

@HostListener('click', ['$event'])
settleDye(e){
this.dyeSer.sendMsg(this.userSer.currentUserObj.name)
  if(this.userSer.currentUserDyeCount <= 0)
      return false;
  this.currentUser = this.userSer.currentUser;
  this.userSer.userPosition = this.currentDye; 
  this.active = true;
  this.dyeSer.getDye(this);
}

@HostListener("dragover", ["$event"])
allowDrop(ev) {
  ev.preventDefault();
}


@HostListener("dragstart", ["$event"])
 drag(ev) {
   console.log(this[this.userSer.currentUserFlag])
   console.log((this.currentUser != this.userSer.currentUser) || !this.active)
   if(
    !this[this.userSer.currentUserFlag] && ( 
    (this.currentUser != this.userSer.currentUser) ||      
      !this.active || 
      this.userSer.currentUserDyeCount != 0)) {
        return false;
   }    
  this.active = false;
  console.log("grag>>> "+this.currentDye)
  this.dyeSer.previousDye = this.currentDye;
}
@HostListener("drop", ["$event"])
 drop(ev) {
    ev.preventDefault();
    this.active = true;
    this.currentUser = this.userSer.currentUser;
    console.log(this.currentDye)
    this.userSer.userPosition = this.currentDye; 
    this.dyeSer.dragDye(true);
    //this.dye
    this[this.userSer.currentUserFlag] = true;
    
    this.userSer.swapUser();
    console.log(this.userSer.currentUser);
  }
}

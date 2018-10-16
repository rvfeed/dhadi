import { Directive, HostBinding, HostListener, ElementRef, ViewChild, Renderer, ViewContainerRef, Input } from '@angular/core';
import { DhadiService } from '../services/dhadi.service';
import 'rxjs/add/operator/debounceTime'
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

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
    private userSer: UserService,
  private socketSer: SocketService) {

     }

ngOnInit(){
 
 // this.dyeSer.socketConnect.subscribe(console.log)
}

@HostListener('click', ['$event'])
settleDye(e){
  if(this.userSer.currentUserDyeCount <= 0)
      return false;
  //this.currentUser = this.userSer.currentUser;
  //this.userSer.userPosition = this.currentDye; 
  this.active = true;
  this.dyeSer.getDye(this);
}

@HostListener("dragover", ["$event"])
allowDrop(ev) {
  ev.preventDefault();
}


@HostListener("dragstart", ["$event"])
 drag(ev) {
   console.log("this.currentUser", this.currentUser)
   console.log(" this.userSer.currentUser",  this.userSer.currentUser)
   console.log(" this.userSer.currentUser",  this.userSer.currentUser)
   console.log(" this.active",  this.active)
   console.log(" this.userSer.currentUserDyeCount",  this.userSer.currentUserDyeCount)
  
   if(this.currentDye)
   if(
    !this[this.userSer.currentUserFlag] && ( 
        
      !this.active || 
      this.userSer.currentUserDyeCount > 0)) {
        return false;
   }    
  this.active = false;
  
  console.log("grag>>> "+this.currentDye)
  this.dyeSer.previousDye = this.currentDye;
}
@HostListener("drop", ["$event"])
 drop(ev) {
    ev.preventDefault();
    console.log(this.dyeSer.dhadiIndices);
    let indices = this.dyeSer.dhadiIndices;
    console.log("!indices[this.dyeSer.previousDye].includes(this.currentDye)", !indices[this.dyeSer.previousDye].includes(this.currentDye))
    if(this.dyeSer.activeDyes.includes(this.currentDye)){
      return false;
    }
    if(!indices[this.dyeSer.previousDye].includes(this.currentDye)){
      return false;
    }
  
    this.active = true;
   // this.currentUser = this.userSer.currentUser;
    console.log(this.currentDye)
   // this.userSer.userPosition = this.currentDye; 
    this.dyeSer.dragDye(this.currentDye);
    //this.dye
    this[this.userSer.currentUserFlag] = true;
    
   // this.userSer.swapUser();
    console.log(this.userSer.currentUser);
  }
}

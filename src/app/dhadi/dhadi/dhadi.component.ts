import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer, AfterViewInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { DhadiService } from '../services/dhadi.service';
import { DhadiDirective } from '../directives/dhadi.directive';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { User } from '../lib/dhadi';
import { UserService } from '../services/user.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-dhadi',
  templateUrl: './dhadi.component.html',
  styleUrls: ['./dhadi.component.scss']
})
export class DhadiComponent implements OnInit, AfterViewInit {

  corners: Array<number> = [1,2,3,4,5,6,7,8,9]; 
  @ViewChild("dye") dye : TemplateRef<DhadiDirective>;
  @ViewChildren(DhadiDirective) dhadiDire : QueryList<DhadiDirective>;
  isActive: boolean = false;
  users: User[];
  successMsg: string = "";
  dhadiData: any;
  constructor( 
    private el: ElementRef,
    private render: Renderer,
    private dhadiSer: DhadiService,
  private userSer: UserService,
private socketSer: SocketService) { }

   ngOnInit() {
     this.socketSer.socketConnect.subscribe(data =>{
       console.log("socket component", data);
       this.dhadiData = data;       
        let user = data.users.filter( user => user.name == data.socketId)[0];
        if(user){
          this.isActive = user.isActive;
        }
     })
    this.userSer.getUsers();
    console.log(this.users)
    this.userSer.successMsg.subscribe( msg => {
      this.successMsg = msg;
    })
    this.dhadiSer.drag$.
    subscribe( flag =>{
      if(flag){
        console.log(this.userSer.currentUserFlag);
        this[this.userSer.currentUserFlag] = false;
      }
    });
   } 
 
  settleDye(pos){ }
  
  ngAfterViewInit(){
    this.clickOnDhadi();
    this.dhadiSer.drag$.subscribe( dir =>{
      if(dir){
        let m = this.dhadiDire.map(a => {  
      //    console.log(a.currentDye , this.dhadiSer.previousDye)
        if(a.currentDye == this.dhadiSer.previousDye){
          a[this.userSer.currentUserFlag] = false;
        }
      });
      }
    })
  }
//@HostListener('click', ['$event'])


clickOnDhadi(){
  console.log(this.dhadiDire)
  
  this.dhadiSer.dye.subscribe(pos =>{
   
    if(!pos) return false;
    console.log(pos);
    console.log(this.dhadiData)
    let m = this.dhadiDire.map(a => {
     let str = this.userSer.currentUserFlag;
      if(pos == a && this.userSer.currentUserDyeCount > 0){     
        a[str] = true;
        console.log(a)
        
        this.socketSer.sendMsg({eventName: 'clickedOnDye', payload: {
            currentDye: a.currentDye
          }
        })
        this.userSer.updateCurrentUserDyeCount();
        this.userSer.swapUser();
      }
    }); 
   
  });
}

}

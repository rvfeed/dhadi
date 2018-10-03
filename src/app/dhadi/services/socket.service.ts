import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { UserService } from './user.service';
import "rxjs/add/operator/map"
import { SocketSendEvent } from '../lib/dhadi';

@Injectable()
export class SocketService {

  // Our socket connection
  private socket;
  socketConnect : Subject<any>;
  userData: any;
  currentUser: number = 1;
  currentUserId: string;
  constructor() {
    this.socketConnect = <Subject<any>>this.connect().map(a => a);
   }

  connect(): Subject<MessageEvent> {
    this.socket = io('http://localhost:3001'); 
        this.socket.on('message', (userData) =>{
          this.currentUser = userData.currentUser;
          this.currentUserId = userData.currentUserId;
          this.userData = userData.users;       
        })

    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          if(!data && data.socketId){
            data = {};
          }
          if(this.socket.id)
              data.socketId = this.socket.id;
          observer.next(data);
        })
        return () => {
         this.socket.disconnect();
        }
    });
  
    let observer = {
        next: (data: any) => {
          console.log("data", data)
          this.socket.emit(data.eventName || 'message', JSON.stringify(data.payload));
            
        },
    };
    return Subject.create(observer, observable);
  }
  sendMsg(msg: SocketSendEvent){
    this.socketConnect.next(msg);
  }
}

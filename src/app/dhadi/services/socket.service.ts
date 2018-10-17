import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { UserService } from './user.service';
import "rxjs/add/operator/map"
import { eventFormat } from '../lib/dhadi';

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
sendMsg(msg){
this.socketConnect.next(msg);
}
  connect(): Subject<MessageEvent> {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io('http://13.127.40.235:3000');
 //       console.log(this.socket.emit("message", "hello"))
 
        this.socket.on('message', (userData) =>{
          console.log(userData.users, "this.socket.id")
     //     this.currentUser = userData.currentUser;
     //     this.currentUserId = userData.currentUserId;
   //       this.userData = userData.users;
        })
    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          data.socketId = this.socket.id;
          observer.next(data);
        })
        return () => {
         this.socket.disconnect();
        }
    });
  
    let observer = {
        next: (data: eventFormat) => {
          console.log("data", data)
          this.socket.emit(data.eventName || 'message', JSON.stringify(data.payload));
            
        },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Subject.create(observer, observable);
  }

}

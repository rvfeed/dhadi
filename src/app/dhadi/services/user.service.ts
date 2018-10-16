import { Injectable } from '@angular/core';
import { User, DhadiIndices } from '../lib/dhadi';
import { DhadiService } from './dhadi.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SocketService } from './socket.service';

@Injectable()
export class UserService {
  activeUsers : number[] = [1,2]
  _currentUser: string = "user1";
  finalPosition = [];
  _users: User[] = [new User("A", "user user1", true), new User("B", "user user2")];
  matchIndices: Array<number[]> = new DhadiIndices().winIndices;
  successMsg = new BehaviorSubject(null);
  _currentUserObj: User;
  dhadiData: any;
  _currentUserDyeCount: number;
  constructor(
    private dyeSer: DhadiService, 
    private socketSer: SocketService) { 
      this.socketSer.socketConnect.subscribe(data =>{
        console.log("socket component", data);
        this.dhadiData = data.dhadiData;
        this._users = data.users;
        this.currentUser = this.dhadiData.currentUser;
      })
    }

get userName(){
  return sessionStorage.getItem("username") || "Raj"+Math.random()*100;
}
  /* set userPosition(position: number){
    console.log(this.matchIndices)
    this.currentUserObj.previousDye = this.dyeSer.previousDye;
    this.currentUserObj.position = position;
    
    for(let arr of this.matchIndices){
      console.log(arr,this.userFinalPosition,
       (arr.toString() == this.userFinalPosition.toString()))
      if(arr.toString() == this.userFinalPosition.toString()){
          this.successMsg.next("Hurreyyyy!! "+this.currentUserObj.name+" has won!");  
      }
    }
    console.log(this.currentUserObj.name)
    console.log(this.userFinalPosition)
  } */
  
  getUsers(){
     this.socketSer.sendMsg("hellooooo")
    return this._users;
  }
  async setUsers(users){
    this._users = users;
  }
  get currentUser(): string{
    return this._currentUser;
  }
  set currentUser(user){
    this._currentUser = user;
  }
  get currentUserFlag(): string{
    return this.currentUser+"Active";
  }
 
  
  get currentUserDyeCount(){
    return this._currentUserDyeCount;
  }
  set currentUserDyeCount(count: number){
     this._currentUserDyeCount = count;
  }
  /* updateCurrentUserDyeCount(){
    return this.currentUserObj.dyeCount--;
  } */
}

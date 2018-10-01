import { Injectable } from '@angular/core';
import { User, DhadiIndices } from '../lib/dhadi';
import { DhadiService } from './dhadi.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  activeUsers : number[] = [1,2]
  _currentUser: number = 1;
  finalPosition = [];
  _users: User[] = [new User("A", "user user1", true), new User("B", "user user2")];
  matchIndices: Array<number[]> = new DhadiIndices().winIndices;
  successMsg = new BehaviorSubject(null);
  constructor(private dyeSer: DhadiService) { }
  swapUser(){
    let u = this.activeUsers;
      this.activeUsers = [u[0]-(u[0]-u[1]), u[1]-(u[1]-u[0])];
      this.currentUser = this.activeUsers[0];
  }

  set userPosition(position: number){
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
  }
  get userFinalPosition(): number[]{
    return this.currentUserObj.finalPosition;
  }
  getUsers(){
    return this._users;
  }
  get currentUser(): number{
    return this._currentUser;
  }
  set currentUser(user){
    this._currentUser = user;
  }
  get currentUserFlag(): string{
    return "user"+this.currentUser+"Active";
  }
  get currentUserObj(): User{
    return this._users[this.currentUser-1];
  }
  get currentUserDyeCount(){
    return this.currentUserObj.dyeCount;
  }
  updateCurrentUserDyeCount(){
    return this.currentUserObj.dyeCount--;
  }
}

import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  statusChange: any = new EventEmitter<any>();

  constructor() { }

set(userFromDatabase) {
  localStorage.setItem('user', JSON.stringify(userFromDatabase));
  this.statusChange.emit(userFromDatabase);
}

getProfile(){
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}

getUserFromDatabase(uid) {
  const ref = auth().currentUser.uid;
  console.log(ref);
  return ref;
}

destroy(){
  auth().currentUser.delete();
  localStorage.removeItem('user');
  this.statusChange.emit(null);
}

}



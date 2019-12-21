//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import * as firebase from '@firebase/app';
import { Injectable } from '@angular/core';
import { auth, /*storage,*/ database } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private database: AngularFireDatabase) { }

getUserFromDatabase(uid) {
  const ref = auth().currentUser.uid;
  console.log(ref);
  return ref;
}

getUserFromDatabase2(uid) {
  const ref2 = database().ref('users/' + uid);
  return ref2.once('value')
    .then(snapshot => snapshot.val());
}

getAgentFromDatabase(uid) {
  const ref3 = database().ref('agents/' + uid);
  return ref3.once('value')
    .then(snapshot => snapshot.val());
}

getOwnerFromDatabase(uid) {
  const ref4 = database().ref('owners/' + uid);
  return ref4.once('value')
    .then(snapshot => snapshot.val());
}

}

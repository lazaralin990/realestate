import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { auth, database } from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

showAgent = false;
showOwner = false;
typeUser = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmitAgent(f: NgForm ) {
    console.log(f.value);
    console.log(f.value.email);
    const agentName = f.value.name;
    const agentEmail = f.value.email;
    const agentPassword = f.value.password;
    this.typeUser = f.value.typeUser = 'agent';
    auth().createUserWithEmailAndPassword(agentEmail, agentPassword)
      .then(userData =>{
        userData.user.sendEmailVerification();
        console.log(userData);

        database().ref('agents/' + userData.user.uid).set({
          Email: agentEmail,
          Name: agentName,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
          User: this.typeUser
        })
        .then(() => {
          auth().signOut();
        });
      })
      .catch(err=>{console.log(err);
      });
  }

  onSubmitOwner(f: NgForm ) {
    console.log(f.value);
    console.log(f.value.email);
    const ownerName = f.value.name;
    const ownerEmail = f.value.email;
    const ownerPassword = f.value.password;
    this.typeUser = 'owner';
    auth().createUserWithEmailAndPassword(ownerEmail, ownerPassword)
      .then(userData =>{
        userData.user.sendEmailVerification();
        console.log(userData);

        database().ref('owners/' + userData.user.uid).set({
          Email: ownerEmail,
          Name: ownerName,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
          User: this.typeUser
        })
        .then(() => {
          auth().signOut();
        });
      })
      .catch(err=>{console.log(err);
      });
  }



    onShowAgent(){
      this.showAgent = !this.showAgent;
    }
    onShowOwner(){
      this.showOwner = !this.showOwner;
    }
}


import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { StorageService } from './../../storage.service';
import { auth } from 'firebase';
import { NgForm /*  FormGroup, FormBuilder, Validators, FormControl, EmailValidator */ } from '@angular/forms';
import { Component, OnInit /* ViewChild, ElementRef */ } from '@angular/core';
//import { DatasharingService } from 'src/app/datasharing.service';
//import { NotificationService } from 'src/app/notifier.service';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showAgent = false;
  showOwner = false;
  userType = null;
  alertOpenAgent = false;
  alertOpenOwner = false;
  alertOpen = false;

  constructor(
    private storage: StorageService,
    private router: Router,
    private userService: UserService,
    //private data: DatasharingService,
    //private http: HttpClient

    ) { }

  ngOnInit() {

  }

  onSubmitAgent(f: NgForm) {
    const emailAgent = f.value.email;
    const passwordAgent = f.value.password;

    if (emailAgent){
      console.log('hay correo');
    } else {
      this.alertOpen = true;
      setTimeout(() => {
      this.alertOpen = false;
      }, 5000);
    }
    if(passwordAgent) {
    } else {
      this.alertOpen = true;
      setTimeout(() => {
      this.alertOpen = false;
      }, 5000);
    }

    auth().signInWithEmailAndPassword(emailAgent, passwordAgent)
      .then(userData => {
        if(userData.user.emailVerified) {
          return this.storage.getAgentFromDatabase(userData.user.uid);
        } else {
          this.alertOpen = true;
          setTimeout(() => {
          this.alertOpen = false;
          }, 5000);
          auth().signOut();
        }
      })
      .then(userDatafromDatabase => {
        if (userDatafromDatabase && userDatafromDatabase.User === 'agent') {
          this.userService.set(userDatafromDatabase);
          this.router.navigate(['/agent']);
        } else {
          this.alertOpenAgent = true;
          setTimeout(() => {
            console.log('hide');
            this.alertOpenAgent = false;
            }, 5000);
          auth().signOut();
        }
      });

  }

  onSubmitOwner(f: NgForm ) {
    console.log(f.value);
    console.log(f.value.email);
    const emailOwner = f.value.email;
    const passwordOwner = f.value.password;

    auth().signInWithEmailAndPassword(emailOwner, passwordOwner)
      .then(userData => {
        if (userData.user.emailVerified) {
          return this.storage.getOwnerFromDatabase(userData.user.uid);
        } else {
          this.alertOpen = true;
          setTimeout(() => {
          this.alertOpen = false;
            }, 5000);
          auth().signOut();
        }
      })
      .then(userDatafromDatabase => {
        if (userDatafromDatabase && userDatafromDatabase.User === 'owner') {
          this.userService.set(userDatafromDatabase);
          this.router.navigate(['/owner']);
        } else {
          this.alertOpenOwner = true;
          setTimeout(() => {
          this.alertOpenOwner = false;
          }, 5000);
          auth().signOut(); }
      }) ;

  }

  onShowAgent(){
    this.showAgent = !this.showAgent;
  }
  onShowOwner(){
    this.showOwner = !this.showOwner;
  }

}

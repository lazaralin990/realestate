//import { environment } from './../../environments/environment.prod';
//import { firebase } from '@firebase/app';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
//import { Observable } from 'rxjs';
import { auth } from 'firebase';
import { Component, OnInit, EventEmitter } from '@angular/core';
//import {DatasharingService} from 'src/app/datasharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   isAgent = false;
   isLoggedIn: boolean = false;
   isOwner: boolean = false;
   name: string;
   uid: string;
   email: string;
   typeUser: string = null;

  constructor(
    private userService: UserService,
    private router: Router,
   // private data: DatasharingService
    ) { }


  ngOnInit() {

    this.userService.statusChange.subscribe(userData => {
      if (userData) {
        this.name = userData.name;
        this.email = userData.email;
        this.uid = userData.uid;
        this.typeUser = userData.User;
        if(userData.User === 'agent'){
          this.isAgent=true;
          this.isLoggedIn = true;
        } else if(userData.User === 'owner'){
          this.isOwner = true;
          this.isLoggedIn = true;
        }
        console.log(this.typeUser + '1');
      } else {
        this.name = null;
        this.email = null;
        this.uid = null;
      }
    });


    /*
    auth().onAuthStateChanged(userData => {
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
        const userData = this.userService.getProfile();
        this.name = userData.name;
        this.email = userData.email;
        this.uid = userData.uid;
        this.router.navigate(['home'])
        }else {
        this.isLoggedIn = false;
      }
    });

*/

    auth().onAuthStateChanged(userData => {
      if (userData && userData.emailVerified){
        const userData = this.userService.getProfile();
          // tslint:disable-next-line: align
          if(userData && userData.name && userData.User === 'agent') {
                this.name = userData.name;
                this.email = userData.email;
                this.uid = userData.uid;
                this.isLoggedIn = true;
                this.router.navigate(['home']);
          } else if (userData && userData.name && userData.User === 'owner') {
              this.name = userData.name;
              this.email = userData.email;
              this.uid = userData.uid;
              this.isOwner = true;
              this.isLoggedIn = true;
              this.router.navigate(['home']);
          } else {
        this.isLoggedIn = false;
      }
    }
    else {
      this.isLoggedIn = false;
    }
  });





  }

  onLogout() {
    auth().signOut()
      .then(() =>{
        this.userService.destroy();
        this.isLoggedIn = false;
      });
  }

}


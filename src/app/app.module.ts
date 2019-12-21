import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatSliderModule } from '@angular/material/slider';
//import {MatExpansionModule, MatFormFieldModule} from '@angular/material';
//import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AgentComponent } from './agent/agent.component';
import { OwnerComponent } from './owner/owner.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
//import { AngularFirestoreModule } from '@angular/fire/firestore';


//services
import { HandleAdsService } from './services/handle-ads.service';
import { UserService } from './user.service';
import { StorageService } from './storage.service';

import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AgentComponent,
    OwnerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
    //AngularFirestoreModule,
   // AngularFireAuthModule,
    //MatSliderModule,
    //MatExpansionModule,
    //MatFormFieldModule,
    //HttpClientModule,

  ],
  providers: [AuthGuard, HandleAdsService, UserService, StorageService, AngularFireDatabase],
  bootstrap: [AppComponent],
})
export class AppModule { }

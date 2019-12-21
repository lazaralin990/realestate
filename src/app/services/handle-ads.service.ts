import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Ad } from './../models/ad';

@Injectable({
  providedIn: 'root'
})
export class HandleAdsService {

  AddsList: AngularFireList<any>;
  selectedAd: Ad = new Ad();

  constructor(private firebase: AngularFireDatabase) { }

   getAds(){
   return this.AddsList = this.firebase.list('/ads');
  }

  insertAd(ad: Ad){
    this.AddsList.push({
      title: ad.title,
      description: ad.description,
      price: ad.price,
      //image: ad.image
    });
  }

}

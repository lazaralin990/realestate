import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HandleAdsService } from './../services/handle-ads.service';
import { Ad } from './../models/ad';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  ad: Ad[];

  constructor(private handleAdsService: HandleAdsService) { }

  ngOnInit() {
    this.handleAdsService.getAds()
      .snapshotChanges()
      .subscribe(item => {
        this.ad = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ad.push(x as Ad);
        });
      });
  }

  onSubmit(AdForm: NgForm){
    this.handleAdsService.insertAd(AdForm.value);
  }

  resetForm(){}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import * as firebase from 'firebase/app';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
public values:any;
  constructor(public navCtrl: NavController) {
    var config = {
      apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
      authDomain: "cdacproject-8bc9f.firebaseapp.com",
      databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
      projectId: "cdacproject-8bc9f",
      storageBucket: "cdacproject-8bc9f.appspot.com",
      messagingSenderId: "767234563615"
    };

firebase.initializeApp(config);
   var ref= firebase.app().database().ref();
   var databaseref=ref.child("slot_1");
   
   databaseref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
      

  }

  onContact(){
    this.navCtrl.push(AboutPage);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    let length = this.slides.length();
    if(currentIndex==length){
      this.slides.stopAutoplay();
    }
  }

}

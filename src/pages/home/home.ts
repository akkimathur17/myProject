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
  public static value1:any;
  public static value2:any;
  public static value3:any;
  public static value4:any;

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
   var databaseref1=ref.child("slot_1");
   var databaseref2=ref.child("slot_2");
   var databaseref3=ref.child("slot_3");
   var databaseref4=ref.child("slot_4");


   
   databaseref1.on("value", function(snapshot) {
   HomePage.value1 = snapshot.val();
      console.log(HomePage.value1);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  databaseref2.on("value", function(snapshot) {
    HomePage.value2 = snapshot.val();
    console.log(HomePage.value2);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   databaseref3.on("value", function(snapshot) {
    HomePage.value3 = snapshot.val();
    console.log(HomePage.value3);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

   databaseref4.on("value", function(snapshot) {
    HomePage.value4 = snapshot.val();
    console.log(HomePage.value4); 
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
      

  }
  get value1func(){
    return HomePage.value1;
  }
  get value2func(){
    return HomePage.value2;
  }
  get value3func(){
    return HomePage.value3;
  }
  get value4func(){
    return HomePage.value4;
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

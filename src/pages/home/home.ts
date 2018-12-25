import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import * as firebase from 'firebase/app';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';




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

  isListening: boolean = false;
  matches: Array<String>;

  constructor(public navCtrl: NavController, public speech: SpeechRecognition, private zone: NgZone) {
 
   
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

  async hasPermission():Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      console.log(permission);

      return permission;
    } catch(e) {
      console.log(e);
    }
  }

  async getPermission():Promise<void> {
    try {
      this.speech.requestPermission();
    } catch(e) {
      console.log(e);
    }
  }

  listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    this.toggleListenMode();
    let _this = this;

    this.speech.startListening()
      .subscribe(matches => {
        _this.zone.run(() => {
          _this.matches = matches;
        })
      }, error => console.error(error));

  }

  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }

}

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
  public static value5:any;
  public static value6:any;
  public static value7:any;
  public static value8:any;
  public  livingroom:boolean=true;
  
 
  


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
   var databaseref1=ref.child("air_quality");
   var databaseref2=ref.child("humidity");
   var databaseref3=ref.child("motion");
   var databaseref4=ref.child("temp");
   var databaseref5=ref.child("tempstate");
   var databaseref6=ref.child("washroomstate");
   var databaseref7=ref.child("bedroomstate");
   var databaseref8=ref.child("livingroomstate");

   

   
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
   databaseref5.on("value", function(snapshot) {
    
    HomePage.value5=snapshot.val();
    console.log(HomePage.value5);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   databaseref6.on("value", function(snapshot) {
    
    HomePage.value6=snapshot.val();
    console.log(HomePage.value6);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   databaseref7.on("value", function(snapshot) {
    
    HomePage.value7=snapshot.val();
    console.log(HomePage.value7);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   databaseref8.on("value", function(snapshot) {
    
    HomePage.value8=snapshot.val();
    console.log(HomePage.value8);
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   
  
    
    
      

  }
  get  value1func(){
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
 
   kitchenValue(){
    var ref= firebase.app().database().ref();
    var databaseref5=ref.child("kitchenstate");
    if(HomePage.value5==0){
      databaseref5.set(1);
       }
       else{
databaseref5.set(0);
       }
    
   

  }
  washroomValue(){
    var ref= firebase.app().database().ref();
    var databaseref6=ref.child("washroomstate");
    if(HomePage.value6==0){
      databaseref6.set(1);
       }
       else{
databaseref6.set(0);
       }}
  bedroomValue(){
        var ref= firebase.app().database().ref();
        var databaseref7=ref.child("bedroomstate");
        if(HomePage.value7==0){
          databaseref7.set(1);
           }
           else{
    databaseref7.set(0);
           }}
    livingroomValue(){
            var ref= firebase.app().database().ref();
            var databaseref8=ref.child("livingroomstate");
            if(HomePage.value8==0){
              databaseref8.set(1);
               }
               else{
        databaseref8.set(0);
               }}

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AboutPage } from '../about/about';
import * as firebase from 'firebase/app';


import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';
import { GlobalProvider } from '../../providers/global/global';
import { LivingRoomPage } from '../living-room/living-room';
import { KitchenPage } from '../kitchen/kitchen';
import { BedroomPage } from '../bedroom/bedroom';
import { WashroomPage } from '../washroom/washroom';




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
  
   
  


  isListening: boolean = false;
  matches: Array<String>;

  constructor(public navCtrl: NavController,public speech: SpeechRecognition, private zone: NgZone) {
  
           
    var config = {
      apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
      authDomain: "cdacproject-8bc9f.firebaseapp.com",
      databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
      projectId: "cdacproject-8bc9f",
      storageBucket: "cdacproject-8bc9f.appspot.com",
      messagingSenderId: "767234563615"
    };
if(!firebase.app.length){
firebase.initializeApp(config);}
   var ref= firebase.app().database().ref();
   var databaseref1=ref.child("air_quality");
   var databaseref2=ref.child("humidity");
   var databaseref3=ref.child("motion");
   var databaseref4=ref.child("temp");
   var databaseref5=ref.child("kitchenstate");
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
   
  
  
    
      

  }
ngOnInit() {
this.speech.hasPermission()
    .then((hasPermission: boolean) => {

      if (!hasPermission) {
      this.speech.requestPermission()
        .then(
          () => console.log('Granted'),
          () => console.log('Denied')
        )
      }

   });
   

}
  get livingstatevalue(){
    return HomePage.livingroom;
  }
  get bedroomstatevalue(){
    return HomePage.bedroom;
  }
  get washroomstatevalue(){
    return HomePage.washroom
    ;
  }

  get kitchenstatevalue(){
    return HomePage.kitchen;
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

  onLivingRoom(){
    this.navCtrl.push(LivingRoomPage);
  }

  onKitchen(){
    this.navCtrl.push(KitchenPage);
  }

  onBedroom(){
    this.navCtrl.push(BedroomPage);
  }

  onWash(){
    this.navCtrl.push(WashroomPage);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    let length = this.slides.length();
    if(currentIndex==length){
      this.slides.stopAutoplay();
    }
  }
  

 

  listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }
    
    
    this.speech.startListening()
      .subscribe(matches => {
        this.zone.run(() => {
          var ref= firebase.app().database().ref();
          var databaseref5=ref.child("kitchenstate");
   var databaseref6=ref.child("washroomstate");
   var databaseref7=ref.child("bedroomstate");
   var databaseref8=ref.child("livingroomstate");
   var databaseref4=ref.child("livingroomfan");
   var databaseref3=ref.child("bedroomfan");
          this.matches = matches;
        switch(matches[0]){
          case "turn off bedroom light":
          databaseref7.set(0);
          break;
          case "turn off washroom light":
          databaseref6.set(0);
          break;
          case "turn off kitchen light":
          databaseref5.set(0);
          break;
          case "turn off living room light":
          databaseref8.set(0);
          break;
          case "turn on bedroom light":
          databaseref7.set(1);
          break;
          case "turn on washroom light":
          databaseref6.set(1);
          break;
          case "turn on kitchen light":
          databaseref5.set(1);
          break;
          case "turn on living room light":
          databaseref8.set(1);
          break;
          case "turn on living room fan":
          databaseref4.set(1);
          break;
          case "turn off living room fan":
          databaseref4.set(0);
          break;
          case "turn on bedroom fan":
          databaseref3.set(1);
          break;
          case "turn off bedroom fan":
          databaseref3.set(0);
          break;
          case "turn on all":
          databaseref3.set(1);
          databaseref4.set(1);
          databaseref5.set(1);
          databaseref6.set(1);
          databaseref7.set(1);
          databaseref8.set(1);
           break;
           case "turn off all":
          databaseref3.set(0);
          databaseref4.set(0);
          databaseref5.set(0);
          databaseref6.set(0);
          databaseref7.set(0);
          databaseref8.set(0);
           break;


         
        }
        
        
        })
      }, error => console.error(error));

  }
 

  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }
 
  

              }

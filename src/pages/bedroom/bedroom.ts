import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the BedroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bedroom',
  templateUrl: 'bedroom.html',
})
export class BedroomPage {
 
  static bedroom: any;
  static bedroomfan:any;
  static value7: number;
  static value8:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
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
   
   var databaseref7=ref.child("bedroomstate");
   var databaseref8=ref.child("bedroomfan");

   databaseref7.on("value", function(snapshot) {
    BedroomPage.value7=snapshot.val();
    if(BedroomPage.value7){
      BedroomPage.bedroom=true;
     }
     else{
       BedroomPage.bedroom=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   databaseref8.on("value", function(snapshot) {
    BedroomPage.value8=snapshot.val();
    if(BedroomPage.value8){
      BedroomPage.bedroomfan=true;
     }
     else{
       BedroomPage.bedroomfan=false;
     }
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });
   
  }

  get bedroomstatevalue(){
    return BedroomPage.bedroom;
  }

  get bedroomstatefanvalue(){
    return BedroomPage.bedroomfan;
  }
  bedroomValue(){
    var ref= firebase.app().database().ref();
    var databaseref7=ref.child("bedroomstate");
    if(BedroomPage.value7==0){
      databaseref7.set(1);
       }
       else{
            databaseref7.set(0);
        }
    const toast = this.toastCtrl.create({
      message: 'Aplliances handeled successfully',
      duration: 3000
    });
    toast.present();
  }
  bedroomfanValue(){
    var ref= firebase.app().database().ref();
    var databaseref8=ref.child("bedroomfan");
    if(BedroomPage.value8==0){
      databaseref8.set(1);
       }
       else{
            databaseref8.set(0);
        }
    const toast = this.toastCtrl.create({
      message: 'Aplliances handeled successfully',
      duration: 3000
    });
    toast.present();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BedroomPage');
  }

}

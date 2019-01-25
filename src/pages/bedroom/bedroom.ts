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
  static value4: any;
  static bedroom: any;
  static value7: number;

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
   var databaseref4=ref.child("temp");
   var databaseref7=ref.child("bedroomstate");

   databaseref4.on("value", function(snapshot) {
    BedroomPage.value4 = snapshot.val();
    console.log(BedroomPage.value4); 
   }, function (errorObject) {
     console.log("The read failed: " + errorObject.code);
   });

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
   
  }

  get bedroomstatevalue(){
    return BedroomPage.bedroom;
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

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BedroomPage');
  }

}

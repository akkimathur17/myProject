import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {GooglePlus} from '@ionic-native/google-plus'


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider{
  private user: firebase.User;

  constructor(public afAuth:AngularFireAuth,public googleplus:GooglePlus) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }
  signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
  }
  signUp(credentials){
    console.log('signup using email');
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
  }
  get authenticated(): boolean {
    return this.user !== null;
  }
  getEmail() {
    return this.user && this.user.email;
  }
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
  signInWithGoogle():Promise<any> {
		console.log('Sign in with google');
	var provider =new firebase.auth.GoogleAuthProvider();
  if (!(<any>window).cordova) {
		return this.afAuth.auth.signInWithPopup(provider);
	} else {

    return this.afAuth.auth.signInWithRedirect(provider)
		.then(() => {
			return this.afAuth.auth.getRedirectResult().then( result => {
				// This gives you a Google Access Token.
				// You can use it to access the Google API.
			
				// The signed-in user info.
				let user = result.user;
				console.log(user);
			}).catch(function(error) {
				// Handle Errors here.
				alert(error.message);
			});
		});

}
 
}}
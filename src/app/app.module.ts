import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ControlsPage } from '../pages/controls/controls';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from '../providers/setting/setting';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SpeechRecognition } from '@ionic-native/speech-recognition';


var config = {
  apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
  authDomain: "cdacproject-8bc9f.firebaseapp.com",
  databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
  projectId: "cdacproject-8bc9f",
  storageBucket: "cdacproject-8bc9f.appspot.com",
  messagingSenderId: "767234563615"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ControlsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(config),
     AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ControlsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SettingsProvider,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';
import { TextToSpeech } from '@ionic-native/text-to-speech';
firebase.initializeApp({
    apiKey: "AIzaSyAYVDmPsZTRcnvb1g0t56YEf3KAV7IpVtI",
    authDomain: "facebooklogin-ded06.firebaseapp.com",
    databaseURL: "https://facebooklogin-ded06.firebaseio.com",
    projectId: "facebooklogin-ded06",
    storageBucket: "facebooklogin-ded06.appspot.com",
    messagingSenderId: "292419314108"
});
@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

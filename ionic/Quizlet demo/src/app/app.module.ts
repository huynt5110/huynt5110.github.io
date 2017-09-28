import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { FileChooser } from '@ionic-native/file-chooser';
import firebase from 'firebase';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MainPage } from '../pages/main/main';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NewWordPage} from '../pages/new-word/new-word';
import { LearnPage} from '../pages/learn/learn';
import { NotificationPage } from '../pages/notification/notification';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import {CardPage} from '../pages/card/card'
import {MatchPage} from '../pages/match/match'
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
    RegisterPage,
    MainPage,
    NewWordPage,
    LearnPage,
    CardPage,
    MatchPage,
    NotificationPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(
      {apiKey: "AIzaSyAYVDmPsZTRcnvb1g0t56YEf3KAV7IpVtI",
      authDomain: "facebooklogin-ded06.firebaseapp.com",
      databaseURL: "https://facebooklogin-ded06.firebaseio.com",
      projectId: "facebooklogin-ded06",
      storageBucket: "facebooklogin-ded06.appspot.com",
      messagingSenderId: "292419314108"}
    ),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    NewWordPage,
    MainPage,
    CardPage,
    MatchPage,
    NotificationPage,
    LearnPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    FileChooser,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

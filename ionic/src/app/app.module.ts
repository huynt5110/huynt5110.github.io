import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage} from '../pages/new-place/new-place';
import { PlacesService} from "../services/places.service";
import { SearchPage} from '../pages/search/search';
import { SegmentsPage} from '../pages/segments/segments';
import { SlidePage} from '../pages/slide/slide';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    SearchPage,
    SegmentsPage,
    SlidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    SearchPage,
    SegmentsPage,
    SlidePage
  ],
  providers: [
    PlacesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

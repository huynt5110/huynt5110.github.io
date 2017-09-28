import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  number;page ;time;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }
  // function is called when view is loaded
  ionViewDidLoad() {
    this.page = this.navParams.data.fromPage
    if(this.page == "learn") {
      // if page is learn get data through param
      this.number = this.navParams.data.correct
    } else if (this.page= "match") {
      this.number = this.navParams.data.error
      this.time = this.navParams.data.time
    }
  }
  dismiss() {
    // turn off view
    this.viewCtrl.dismiss();
  }
}

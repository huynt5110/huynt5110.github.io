import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as _ from 'lodash';
import { NotificationPage } from '../notification/notification'
@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  items = []; arraytemp = [];
  flag = true; val = false;
  firstCheck; secondCheck;
  count = 0; start = 0; errorNumber = 0;
  event1; event2;
  time; elapsed; x;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    // get current data, on start page
    this.start = new Date().getTime();
    let array = this.navParams.data;
    _.map(array, (key, val) => {
      // save value and index 
      let objWordTemp = { "data": key.data.word, "index": val }
      let objMeanTemp = { "data": key.data.meaning, "index": val }
      this.arraytemp.push(objMeanTemp, objWordTemp)
    })
    // random data using lodash libary
    this.items = _.shuffle(this.arraytemp).slice(0);
    this.x = setInterval(() => { this.timeCal() }, 100)
  }
  choseItem(item, $event) {
    // find back to parent node to set attribute
    $event.target.parentNode.setAttribute("disabled", "")
    if (this.flag) {
      this.firstCheck = item["index"]
      this.event1 = $event
    } else {
      // save information of 2 value, user clicked
      this.secondCheck = item["index"]
      this.event2 = $event
    }
    this.flag = !this.flag
    if (this.flag) {
      // check 2 value 
      this.checkIndex($event)
      this.firstCheck = ''
      this.secondCheck = ''
    }
  }
  // check index and push result to new page
  checkIndex($event) {
    this.firstCheck == this.secondCheck ? this.count++ : this.error()
    if (this.count == this.navParams.data.length) {
      clearInterval(this.x)
      let modal = this.modalCtrl.create(NotificationPage, { "error": this.errorNumber, "fromPage": "match","time":this.time });
      modal.present();
      this.navCtrl.pop();
    }
  }
  error() {
    this.errorNumber++;
    // remove attributed if 2 value not match
    this.event1.target.parentNode.removeAttribute("disabled")
    this.event2.target.parentNode.removeAttribute("disabled")
  }
  // Calculate time and show it on screen
  timeCal() {
    this.elapsed = Math.round((new Date().getTime() - this.start) / 100);
    this.time = this.elapsed / 10 + (this.elapsed % 10 ? '' : '.0');
  }
}

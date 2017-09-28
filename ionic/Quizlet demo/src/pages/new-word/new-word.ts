import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-new-word',
  templateUrl: 'new-word.html',
})
export class NewWordPage {
  title; word; meaning
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
  }
  addNewWord() {
    let word = this.word;
    let meaning = this.meaning;
    let title = this.title
    var dateObj = new Date();
    //  get date month year , user add new word
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    let newdate = year + "/" + month + "/" + day;
    let _data = {
      "data": { "word": word, "meaning": meaning },
      "title": title,
      "date": newdate
    }
    //get push word to firebase,and auto generate key
    this.db.list("/user/abc/word").push(_data).then(() => {
      this.navCtrl.pop();
    }).catch((error) => {
      console.log(error);
    })
  }
}

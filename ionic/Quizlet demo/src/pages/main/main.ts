import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NewWordPage } from '../new-word/new-word'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { AngularFireDatabase } from 'angularfire2/database';
import { LearnPage} from '../learn/learn';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  items: { title: string }[] = [];
  firebaseData: { title: string }[] = [];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech, private db: AngularFireDatabase) {
  }
  ionViewWillEnter() {

  }
  ionViewDidLoad() {
    this.db.list("/user/abc/word").subscribe(_data => {
      this.items = _data
      this.firebaseData = _data
      document.getElementById("wordNumber").innerHTML = this.items.length.toString();
    })
    let dataUser = this.navParams.data;
    // document.getElementById("userName").innerHTML = dataUser[5]["$value"];

  }
  AddWord() {
    this.navCtrl.push(NewWordPage);
  }
  // speak contetnt user input
  speak(inputContent) {
    console.log(inputContent)
    this.tts.speak(inputContent)
      .then(() => console.log("success"))
      .catch((reason: any) => console.log(reason));
  }
  //delete from firebase
  remove(item) {
    let confirm = this.alertCtrl.create({
      title: 'Notice',
      message: 'Do you remove this items',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            // if user click agree, remove it from fire base
            this.db.list("/user/abc/word/" + item /*firebase key*/).remove();
          }
        }
      ]
    });
    confirm.present();
  }
  // get items from search bar , then filter and update new list
  getItems(ev) {
    // refresh data
    this.items = this.firebaseData.slice(0);
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item["data"]["word"].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    document.getElementById("wordNumber").innerHTML = this.items.length.toString();
  }
  // switch to LeanPage
  toLearnPage() {
    this.navCtrl.push(LearnPage,this.firebaseData)
  }
}

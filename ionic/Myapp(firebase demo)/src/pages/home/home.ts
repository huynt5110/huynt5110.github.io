import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books=[]
  myInput
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    this.db.list("/Books/FogSong").subscribe(_data => {
      this.books = _data;
      console.log(_data);
    })
  }
  datachanged(book) {
    let index = this.books.indexOf(book);
    let styleLine = this.books[index].title ? "line-through" : "none"
    var x = document.getElementsByClassName("noteText")[index];
    (x as HTMLElement).style.textDecoration = styleLine;
  }
  btnAdd() {
    console.log("vao")
    let x = {title: false, author: this.myInput}
    this.db.list("/Books/FogSong").push(x);
  }

}

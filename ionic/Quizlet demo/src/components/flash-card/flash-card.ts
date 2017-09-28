import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  data
  constructor(private db: AngularFireDatabase) {
    this.db.list("/user/abc/word").subscribe(_data => {
      this.data = _.shuffle(_data).slice(0);
    })
  }
  flip(index){
    let tmp = document.getElementsByClassName("flip-container")[index];
    if(tmp.classList.length > 1) {
      tmp.classList.remove("flipped");
    } else {
      tmp.classList.add("flipped");
    }
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  sd() {
    console.log(document.getElementById("abc"))
    console.log(document.getElementsByClassName("front"))
  }
}

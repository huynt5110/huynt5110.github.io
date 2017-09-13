import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";
/**
 * Generated class for the NewPlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  res = "";
  constructor(private placesService: PlacesService, private navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showalert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please input text',
      buttons: ['OK']
    });
    alert.present();
    return "false";
  }
  ionViewDidLoad() {
  }
  onAddPlace(value: { title: string }) {
    this.res = (value.title === "" ? this.showalert() : this.placesService.addPlace(value));
    this.res === "true" ? this.navCtrl.pop() : "";    
  }
}

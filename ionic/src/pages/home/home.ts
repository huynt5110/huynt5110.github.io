import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesService } from "../../services/places.service";
import { SearchPage} from '../search/search';
import { PopoverController } from 'ionic-angular';
import { SegmentsPage} from '../segments/segments';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: { title: string }[] = [];
  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, private placesService: PlacesService, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }
  toSegments() {
    this.navCtrl.push(SegmentsPage);
  }
  removeFromList(value) {
    let index = this.places.indexOf(value);
    this.placesService.removePlaces(index);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  presentPopover() {
    let popover = this.popoverCtrl.create(SearchPage);
    popover.present();
  }
  //open Modal input
  openModal() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }
  // typescript doesn't have style so have to parse it to htmlelement
  datachanged(e: any, place) {
    let index = this.places.indexOf(place);
    let styleLine = e.checked ? "line-through" : "none"
    var x = document.getElementsByClassName("noteText")[index];
    (x as HTMLElement).style.textDecoration = styleLine;
  }
  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  pressEvent(e) {
    this.actionSheet();
  }
  // show alert when click on list
  showalert(action) {
    let alert = this.alertCtrl.create({
      title: 'Alert !!!!!!!',
      subTitle: 'You have click ' + action,
      buttons: ['OK']
    });
    alert.present();
  }
  // ask user whether want change page
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Attention',
      message: 'You wanna switch to new page',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            // do some thing here
          }
        }, {
          text: 'Agree',
          handler: () => {
            this.onLoadNewPlace();
          }
        }
      ]
    });
    // show alert
    confirm.present();
  }
  // change color method
  changeColor() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Change color');
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // change text color
        document.getElementById("myText").style.backgroundColor = data;
      }
    });
    alert.present();
  }
  // sheet method
  actionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Menu',
      buttons: [
        {
          text: 'SearchPage',
          handler: () => {
            this.openModal();
          }
        }, {
          text: 'To Input Page',
          handler: () => {
            this.showConfirm();
          }
        }, {
          text: 'Change text color',
          handler: () => {
            // change color method
            this.changeColor();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // do something here
          }
        }
      ]
    });
    actionSheet.present();
  }
}

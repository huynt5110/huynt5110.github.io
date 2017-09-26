import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification'
/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {
  myForm: FormGroup;
  maxValue = 6;
  progressval = 0;
  answerInput: '';
  answer: '';
  word = '';
  correct  = 0;
  error = 0;
  i = 0;
  arrayLength = 0;
  dataArray = this.navParams.data;
  constructor(public modalCtrl: ModalController,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
  }
  //ngonit
  ngOnInit(): any {
    this.myForm = this.formBuilder.group({
      'answerInput': ['',[Validators.required,Validators.maxLength(20)]]
    });
    this.arrayLength = this.dataArray.length
    this.setValue()
  }
  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }
  // set first page
  setValue() {
    document.getElementById("wordContent").innerHTML  = this.dataArray[this.i].data.word;
    this.answer = this.dataArray[this.i].data.meaning;
  }
  onSubmit() {
    this.answer == this.answerInput ? this.correct++ : this.error ++
    this.progressval++
    this.i++
    this.i < this.arrayLength ? this.setValue() : this.notification()
  }
  // switch to new page
  notification(){
    let modal = this.modalCtrl.create(NotificationPage,{"correct": this.correct});
    modal.present();
    this.navCtrl.pop();
  }
}

import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import firebase from 'firebase';
import {Facebook} from '@ionic-native/facebook';

import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
import { AngularFireDatabase} from 'angularfire2/database';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myForm: FormGroup;
  userInput: { usernameinput: string,passwordinput: string  } 
  = { usernameinput:'', passwordinput : ''  };
  constructor(public alertCtrl: AlertController,public formBuilder: FormBuilder,public navCtrl: NavController,private facebook: Facebook,private db: AngularFireDatabase) {
    
  }
  //submit form
  onSubmit() {
    //console.log(this.userInput)
    // this.db.list("/user/"+this.userInput.usernameinput).subscribe(_data => {
    //   _data.length != 0 ? this.compareValue(_data) : this.alert();
    // })
    this.navCtrl.push(MainPage)
  }
  // compareValue(_data) {
  //   console.log(_data)
  //   if(this.userInput.usernameinput == _data[5]["$value"] && this.userInput.passwordinput == _data[3]["$value"] ) {
  //     this.navCtrl.push(MainPage,_data);
  //   }
  // }
  //alert
  alert() {
    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: 'Username or password was incorrected !',
      buttons: ['OK']
    });
    alert.present();
  }
  //valid form
  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }
  //ngonit
  ngOnInit(): any {
    this.myForm = this.formBuilder.group({
      'usernameinput': ['',[Validators.required,this.usernameValidator.bind(this),Validators.minLength(5),Validators.maxLength(12)]],
      'passwordinput': ['',[Validators.required,Validators.maxLength(20)]]
    });
  }
  // check input
  usernameValidator(control: FormControl): {[s:string]: boolean} {
    if (!control.value.match("^[a-zA-Z 0-9]+$")) {
      return { invalidName: true };
    }
  }
  // login face in app
  login() {
    this.facebook.login(["email"]).then((loginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      // get authen in facebook, then save it to firebase
      firebase.auth().signInWithCredential(credential).then((info)=> {
        alert(JSON.stringify(info));
        this.navCtrl.push(MainPage)
      })
    })
  }
  
  // switch to register page
  resgister() {
    this.navCtrl.push(RegisterPage);
  }
}

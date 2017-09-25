import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  myForm: FormGroup;
  userInfo: { name: string, email: string, phone: string, gender: string, username: string, password: string } 
  = { name: '', email: '', phone: '', gender: '', username: '',password: '' };
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
  }
  // valid data user input
  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }
  // validate form
  ngOnInit(): any {
    this.myForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3)/*minimum length is 3*/,Validators.maxLength(20), this.nameValidator.bind(this)/*Valid name contain speacial character*/]],
      'phone': ['', this.phoneValidator.bind(this)],
      'email': ['', [Validators.required, this.emailValidator.bind(this)/*valid method, is defined below*/]],
      'gender': ['',[Validators.required]],
      'username': ['',[Validators.required,Validators.minLength(5),Validators.maxLength(12),this.usernameValidator.bind(this)]],
      'password': ['',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  // check value and push to firebase
  onSubmit() {
    this.db.list("/user").set(this.userInfo.username.toString(),this.userInfo).then(()=>{
      this.navCtrl.pop();
    }).catch((error) => {
      console.log(error);
    })
    
  }

  usernameValidator(control: FormControl): {[s:string]: boolean} {
    // contain a-z A-Z and number 0-9
    if (!control.value.match("^[a-zA-Z 0-9 ,.'-]+$")) {
      return { invalidName: true };
    }
  }
  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z 0-9 ,.'-]+$")) {
      return { invalidName: true };
    }
  }

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
        return { invalidPhone: true };
      }
    }
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    // in temporary, just recognize @gmail.com and @yahoo.com
    if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
      return { invalidEmail: true };
    }
  }
}

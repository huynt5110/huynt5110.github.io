import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import {Facebook} from '@ionic-native/facebook';
import { TextToSpeech } from '@ionic-native/text-to-speech';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private facebook: Facebook,private tts: TextToSpeech) {
    
  }
  // login facebook with browser
  // login () {
  //   // authen with firebase
  //   let provider = new firebase.auth.FacebookAuthProvider();
  //   firebase.auth().signInWithRedirect(provider).then(()=> {
  //     // get result
  //     firebase.auth().getRedirectResult().then((result)=> {
  //       console.log(result.user.displayName);
  //       // set attribute for p tag
  //       document.getElementById("Name").innerHTML =  result.user.displayName;
  //       document.getElementById("Email").innerHTML =  result.user.email;
  //       // this is type script so  parse it to html
  //       let pic = document.getElementById("pic") as HTMLImageElement;
  //       pic.src = result.user.photoURL;
  //     }).catch(function(error){
  //       alert(error);
  //     });
  //   })
  // }
  // login face in app
  login() {
    this.facebook.login(["email"]).then((loginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      // get authen in facebook, then save it to firebase
      firebase.auth().signInWithCredential(credential).then((info)=> {
        alert(JSON.stringify(info));
      })
    })
  }
  // speak contetnt user input
  speak(inputContent) { 
    this.tts.speak(inputContent)
    .then(()=> console.log("success"))
    .catch((reaseon:any)=> console.log(reaseon));
  }
}

import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class Fire{
  constructor(){
    var config = {
    apiKey: "AIzaSyCPP71HyXlnZJ2wv-6jMKYT7MrqPCariv0",
    authDomain: "cursosteste-760ba.firebaseapp.com",
    databaseURL: "https://cursosteste-760ba.firebaseio.com",
    storageBucket: "cursosteste-760ba.appspot.com",
    messagingSenderId: "271393413541"
    };

    firebase.initializeApp(config);
  }

  login(token: string, successCallback, errorCallback){
    let credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase.auth().signInWithCredential(credential).then(response => {
      successCallback();
    }, error => {
      errorCallback(error);
    });
  }
}

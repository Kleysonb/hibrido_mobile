import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FacebookLogin } from '../../util/facebook-login';
import { Fire } from '../../util/fire';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: Fire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    FacebookLogin.login(response => {
      //alert(response);
      this.fire.login(response.token, () => {
        alert('sucesso');
      }, error => {
        alert(error.errorMensage);
      });
    }, error => {
      alert(error);
    });
  }

}

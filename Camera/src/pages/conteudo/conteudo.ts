import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GerenciadoConteudo } from '../../providers/gerenciado-conteudo';
/*
  Generated class for the Conteudo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html'
})
export class ConteudoPage {

  titulo: string;
  conteudo: string;
  noticia;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gerConteudo: GerenciadoConteudo) {
    //this.navParams.get()
    console.log(navParams.get('item'));
    this.noticia = navParams.get('item');
    this.titulo = this.noticia.titulo;
    this.conteudo = this.noticia.conteudo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudoPage');
  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ConteudoPage } from '../conteudo/conteudo';
import { GerenciadoConteudo } from '../../providers/gerenciado-conteudo';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  pushPage;
  pagina;
  noticias;

  constructor(public navCtrl: NavController, public gerConteudo: GerenciadoConteudo) {
      this.pushPage = ConteudoPage;
      this.noticias = gerConteudo.getNoticias();
  }

  Clicou(nome: string){
    console.log("Clicou em " + nome);
    //this.navCtrl.push(this.pushPage);
  }



}

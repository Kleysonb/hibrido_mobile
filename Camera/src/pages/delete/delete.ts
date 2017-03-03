import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { GerenciadoConteudo } from '../../providers/gerenciado-conteudo';

/*
  Generated class for the Delete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html'
})
export class DeletePage {

  noticias;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public gerConteudo: GerenciadoConteudo) {
    this.noticias = gerConteudo.getNoticias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

  itemSelected(item){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Apagar',
          role: 'destructive',
          handler: () => {
            console.log('Removendo: ' + item.titulo);
            this.gerConteudo.removerCurso(item.id);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

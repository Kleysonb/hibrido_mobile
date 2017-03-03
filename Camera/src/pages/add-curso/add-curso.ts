import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ToastController } from 'ionic-angular';

import { GerenciadoConteudo } from '../../providers/gerenciado-conteudo';

/*
  Generated class for the AddCurso page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-curso',
  templateUrl: 'add-curso.html'
})
export class AddCursoPage {

  cameraUrl: string;

  public base64Image: string;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public gerConteudo: GerenciadoConteudo) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCursoPage');
  }

  salvarCurso(titulo, conteudo){
    if(titulo && conteudo && this.cameraUrl){
      console.log(titulo.value + " " + conteudo.value);
      this.gerConteudo.adicionarCurso(titulo.value, conteudo.value, this.cameraUrl);
      this.showToast('bottom', 'Curso Adicionado com Sucesso!');
      titulo.value = null;
      conteudo.value = null;
      this.cameraUrl = null;
    }else{
      this.showToast('bottom', 'Informe todos os dados');
    }
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 750,
        targetHeight: 752
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.cameraUrl = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  selectFromGallery() {
    var options = {
      //sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      //destinationType: Camera.DestinationType.FILE_URI
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraUrl = imageData;
      //this.showToast("top", this.cameraUrl);
    }, (err) => {
      // Handle error
      this.showToast("button", "Erro");
    });
  }

  showToast(position: string, mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  
}

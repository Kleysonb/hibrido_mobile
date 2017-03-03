import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GerenciadoConteudo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadoConteudo {

  public noticias: Noticia[] = [];

  constructor(public http: Http) {
    console.log('Hello GerenciadoConteudo Provider');
    this.noticias.push(
      new Noticia(0,"Java", "Java é uma linguagem de programação interpretada orientada a objetos desenvolvida na década de 90.", "assets/img/Java-logo.jpg"),
      new Noticia(1, "AngularJS", "AngularJS é um framework JavaScript open-source, mantido pelo Google, que auxilia na execução de single-page applications.", "assets/img/angularjs-logo.png"));
  }

  getNoticias(){
    return this.noticias;
  }

  adicionarCurso(titulo: string, conteudo: string, img: string){
    let nova = new Noticia(this.noticias.length, titulo, conteudo, img);
    this.noticias.unshift(nova);
  }

  removerCurso(id){
    var i: number;
    for(i = 0; i < this.noticias.length; i++){
      if(this.noticias[i].id == id){
        var removida = this.noticias.splice(i, 1);
        console.log('Removendo: ' + removida);
        break;
      }
    }
  }

}

class Noticia {
  public id;
  public titulo: string;
  public conteudo: string;
  public img: string;

  public constructor (id, titulo: string, conteudo: string, img: string){
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.img = img;
  }
}

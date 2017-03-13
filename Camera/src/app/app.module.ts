import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { ConteudoPage } from '../pages/conteudo/conteudo';

import { GerenciadoConteudo} from '../providers/gerenciado-conteudo';
import { AddCursoPage } from '../pages/add-curso/add-curso';
import { DeletePage } from '../pages/delete/delete';
import { LoginPage } from '../pages/login/login';
import { Fire } from '../util/fire';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ConteudoPage,
    AddCursoPage,
    DeletePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    DeletePage,
    ConteudoPage,
    AddCursoPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GerenciadoConteudo, Fire]
})
export class AppModule {}

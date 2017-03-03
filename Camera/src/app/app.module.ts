import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { ConteudoPage } from '../pages/conteudo/conteudo';

import { GerenciadoConteudo} from '../providers/gerenciado-conteudo';
import { AddCursoPage } from '../pages/add-curso/add-curso';
import { DeletePage } from '../pages/delete/delete';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    ConteudoPage,
    AddCursoPage,
    DeletePage
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
    AddCursoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GerenciadoConteudo]
})
export class AppModule {}

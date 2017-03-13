import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loadProgress;
  constructor(public navCtrl: NavController) {
    this.loadProgress = 50;
  }

  aumentar(){
    //for (var _i = 1; _i <= 10; _i++) {
      //this.loadProgress++;
    //}
    //this.loadProgress += 10;
    var i = 1;                     //  set your counter to 1
    myLoop();
    function myLoop () {           //  create a loop function
       setTimeout(function () {    //  call a 3s setTimeout when the loop is called
          this.loadProgress++;                          //  your code here
          i++;                     //  increment the counter
          if (i < 10) {            //  if the counter < 10, call the loop function
             myLoop();             //  ..  again which will trigger another
          }                        //  ..  setTimeout()
       }, 3000)
    }
  }
}
                    //  start the loop?
